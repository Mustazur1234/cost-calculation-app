import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([TransactionRepository])],
    providers: [UserService],
    exports: [UserService],
    controllers: []
})
export class UsersModule {}