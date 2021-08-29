import { Injectable, UnauthorizedException } from "@nestjs/common";
import { hash, compare } from 'bcryptjs';
import { UserLoginRequestDto } from "../dto/request/user-login.request.dto";
import { UserRegisterRequestDto } from "../dto/request/user-resgister-request.dto";
import { UserService } from '../../users/services/user.service';
import { Transaction } from '../../users/entities/user.entity';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    jwtService: any;
    constructor(private userService: UserService) {}

    async createApiToken(user: Transaction) {
        return this.jwtService.sign({user_id: user.transaction_id });
    
    }

    async registerUser(dto: UserRegisterRequestDto) {
        let { email, password } =dto;
        password = await hash (password, 15);
        let createdUser = await this.userService.createUser({email,password});
        let apiToken = await this.createApiToken(createdUser);

        return {
            api_token:apiToken,
        };
    }

    async loginUser(dto: UserLoginRequestDto) {
        let { email, password } = dto;
        let user = await this.userService.findUserByEmail(email);
        let isPassMatch = await compare(password, user.password);
        if(!isPassMatch) {
            throw new UnauthorizedException('Invalid password');

        }
        let apiToken = await this.createApiToken(user);
        return {
            api_token: apiToken,
        };
    }

    async validateToken(token: string) {
        return this.jwtService.verifyAsync(token);
    }

    async getUser(transactionId: number) {
        let user = await this.userService.findUserById(transactionId);
        return user;
    }
    
}