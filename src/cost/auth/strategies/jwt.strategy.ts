import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "src/cost/users/services/user.service";
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'idfjkuiffd'
        });
    }

    async validate(payload: any) {
        let {transaction_id} = payload;
        let transaction = await this.userService.findUserById(transaction_id);
        return transaction;
    }
}