/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
import { TypeTransaction } from '../transaction.interface';
export declare class CreateTransactionDto {
    amount: number;
    type: TypeTransaction;
    transactionToId?: Types.ObjectId;
    transactionById?: Types.ObjectId;
}
