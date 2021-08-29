import { Module } from "@nestjs/common";
import { TransactionController } from "./controllers/transaction.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionRepository } from './repositories/transaction.repository';
import { TransactionService } from "./services/transaction.service";


@Module({
    imports: [TypeOrmModule.forFeature([TransactionRepository])],
    providers: [TransactionService],
    controllers: [TransactionController],
})
export class TransactionModule {}