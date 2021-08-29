import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppBaseEntity } from "src/dbservice/database/entities/app-base.entity";



@Entity({
    name: 'transaction',
})

export class Transaction  extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    transaction_id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text'})
    description: string;

    @ManyToOne(() => Transaction, {nullable: false, onDelete: 'CASCADE'})
    @JoinColumn({ name: 'transaction_id'})
    transaction: Transaction;
}