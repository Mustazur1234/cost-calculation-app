//import { assertTSExpressionWithTypeArguments } from "@babel/types";
import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from '../services/auth.service';
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/dbservice/guards/jwt-auth.guard";
import { UserRegisterRequestDto } from "../dto/request/user-resgister-request.dto";
import { UserLoginRequestDto } from "../dto/request/user-login.request.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() dto: UserRegisterRequestDto) {
        return this.authService.registerUser(dto);
    }

    @Post('login')
    login(@Body() dto: UserLoginRequestDto) {
        return this.authService.loginUser(dto);
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    userDetails(@Request() request: any) {
        return request.user;
    }
}