import { EntityRepository, Repository } from "typeorm";
import { Transaction } from '../entities/user.entity';


@EntityRepository(Transaction)
export class UserRepository extends Repository<Transaction> {}