import { Module } from '@nestjs/common';
import { UsersModule } from "./users/user.module";
import { DatabaseModule } from 'src/dbservice/database/database.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';


@Module({
    imports: [DatabaseModule, UsersModule, TransactionModule, AuthModule],
    providers: []
})

export class ApiModule {}