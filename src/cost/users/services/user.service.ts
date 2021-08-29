import { Injectable, NotFoundException } from "@nestjs/common";
import { Transaction } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserRegisterRequestDto } from '../../auth/dto/request/user-resgister-request.dto';
import { CreateTransactionReqDto } from "src/cost/transaction/dto/request/create-transaction-request.dto";
import { UpdateTransactionRequestDto } from "src/cost/transaction/dto/request/update-transaction-request.dto";

@Injectable()
export class UserService {
    getOne(transactionId: number, user: any) {
        throw new Error("Method not implemented.");
    }
    getAllTransaction(transaction: any) {
        throw new Error("Method not implemented.");
    }
    updateTransaction(transactionId: number, dto: UpdateTransactionRequestDto) {
        throw new Error("Method not implemented.");
    }
    createTransaction(dto: CreateTransactionReqDto, transaction: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private repository: UserRepository) {}
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