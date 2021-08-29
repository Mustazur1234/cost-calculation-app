import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { CreateTransactionReqDto } from 'src/cost/transaction/dto/request/create-transaction-request.dto';
import { UpdateTransactionRequestDto } from 'src/cost/transaction/dto/request/update-transaction-request.dto';
import { JwtAuthGuard } from 'src/dbservice/guards/jwt-auth.guard';
import { UserService } from "../services/user.service";

@Controller()
export class TransactionController {
    constructor(private transactionService: UserService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() dto: CreateTransactionReqDto, @Req() request: any) {
        return this.transactionService.createTransaction(dto, request.transaction);

    }

    @Patch(':transaction_id')
    @UseGuards(JwtAuthGuard)
    update(@Param('transaction_id') transactionId: number, @Body() dto: UpdateTransactionRequestDto) {
        return this.transactionService.updateTransaction(transactionId, dto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(@Req() req: any) {
        return this.transactionService.getAllTransaction(req.transaction);
    }

    @Get(':transaction_id')
    @UseGuards(JwtAuthGuard)
    getOne(@Param('transaction_id') transactionId: number, @Req() req: any) {
        return this.transactionService.getOne(transactionId, req.user);
    }
}