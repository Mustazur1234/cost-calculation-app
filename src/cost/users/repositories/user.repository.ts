import { EntityRepository, Repository } from "typeorm";
import { Transaction } from '../entities/user.entity';


@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {}