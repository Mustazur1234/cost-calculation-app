import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTransactionReqDto } from "../dto/request/create-transaction-request.dto";
import { UpdateTransactionRequestDto } from "../dto/request/update-transaction-request.dto";
import { TransactionRepository } from '../repositories/transaction.repository';
import { Transaction } from '../../users/entities/user.entity';


@Injectable()
export class TransactionService {
    constructor(private repository: TransactionRepository) {}

    async createTransaction(dto: CreateTransactionReqDto, transaction: Transaction){
        let Transaction = await this.repository.create({...dto, transaction});
        return this.repository.save(transaction);
    }

    async updateTransaction(transactionId: number, dto: UpdateTransactionRequestDto){
        let oldTransaction = await this.repository.findOne({where: { transaction_id: transactionId}});
        return this.repository.save({...oldTransaction, ...dto});
    }

    async getOneTransaction(transactionId: number, user: Transaction) {
        let transaction = await this.repository.findOne({where : { transaction_id: transactionId}});
        
        if (!transaction) {
            throw new NotFoundException(`Transaction with id ${transactionId} not found`);

        }
        return transaction;
    }
    async getAllTransaction(user: Transaction) {
        return this.repository.find({where: {transaction_id: user.transaction_id}});
    }

    async deleteTransaction(transactionId: number,user:Transaction) {
        let res = await this.repository.delete({ transaction_id: transactionId });
        if (res.affected > 0) {
          return { is_deleted: true };
        }
        return { is_deleted: false };
      }
    
}