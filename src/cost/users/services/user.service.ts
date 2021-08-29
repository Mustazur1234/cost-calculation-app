import { Injectable, NotFoundException } from "@nestjs/common";
import { Transaction } from "../entities/user.entity";
import { TransactionRepository } from "../repositories/user.repository";
import { UserRegisterRequestDto } from '../../auth/dto/request/user-resgister-request.dto';

@Injectable()
export class UserService {
    getAllTransaction(transaction: any) {
        throw new Error("Method not implemented.");
    }
    createTransaction(dto: any, transaction: any) {
        throw new Error("Method not implemented.");
    }
    updateTransaction(transactionId: number, dto: any) {
        throw new Error('Method not declear.');
    }

    getOne(transactionId: number, user: any) {
        throw new Error('Method not declear.');
    }
    constructor(private repository: TransactionRepository) {}

    async createUser(dto: UserRegisterRequestDto) {
        let newUser = await this.repository.create(dto);
        return this.repository.save(newUser);
    }

    async findUserByEmail(email: string): Promise<Transaction> {
        let transaction = await this.repository.findOne({where: {email}});
        if(!transaction) {
            throw new NotFoundException('user is wrong');
        }
        return transaction;
    }

    async findUserById(transactionId: number): Promise<Transaction> {
        let transaction = await this.repository.findOne({where: { transaction_id: transactionId}});
        if (!transaction){
            throw new NotFoundException('user is wrong');
        }
        return transaction;
    }
}