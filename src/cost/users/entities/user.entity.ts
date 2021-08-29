import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from 'src/dbservice/database/entities/app-base.entity';

@Entity ({
    name: 'transaction',
})

export class Transaction extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    transaction_id: number;

    @Column({unique: true, nullable: false, type: 'text'})
    email: string;

    @Column({unique: true, nullable: false, type: 'text'})
    password: string;
}


