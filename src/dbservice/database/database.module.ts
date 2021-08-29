import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type:'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            database: 'transaction_db',
            entities: ['dist/**/*.entity{.ts, .js}'],
            synchronize: true,

        }),
    ],

})
export class DatabaseModule {}