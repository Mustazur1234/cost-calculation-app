import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from "../users/user.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";

@Module({
    controllers: [
        AuthController
    ],
    imports: [
        PassportModule.register({ DefaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: "dsjidefaer",
            signOptions: {
                expiresIn: '3d'
            },
        }),
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService, PassportModule],
})
export class AuthModule {}