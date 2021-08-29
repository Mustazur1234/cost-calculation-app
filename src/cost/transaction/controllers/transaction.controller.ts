import {  Body, Controller, Get, Param, Patch, Post, Req, UseGuards} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/dbservice/guards/jwt-auth.guard";
import { CreateTransactionReqDto } from '../dto/request/create-transaction-request.dto';
import { UpdateTransactionRequestDto } from '../dto/request/update-transaction-request.dto';
import { TransactionService } from '../services/transaction.service';


@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() dto: CreateTransactionReqDto,@Req() req: any) {
        return this.transactionService.createTransaction(dto, req.user);
    }

    @Patch(':transaction_id')
    @UseGuards(JwtAuthGuard)
    update(@Param('transaction_id') transactionId: number, @Body() dto: UpdateTransactionRequestDto) {
        return this.transactionService.updateTransaction(transactionId, dto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(@Req() req:any) {
        return this.transactionService.getAllTransaction(req.user);
    }

    @Get(':transaction_id')
    @UseGuards(JwtAuthGuard)
    getOne(@Param('transaction_id') transactionId: number, @Req() req: any) {
        return this.transactionService.getOneTransaction(transactionId, req.user);
    }
}


    
