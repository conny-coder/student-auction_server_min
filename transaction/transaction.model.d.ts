/// <reference types="mongoose/types/types" />
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { TypeTransaction } from './transaction.interface';
export interface TransactionModel extends Base {
}
export declare class TransactionModel extends TimeStamps {
    userId: Types.ObjectId;
    type: TypeTransaction;
    amount: number;
    transactionToId?: Types.ObjectId;
    transactionById?: Types.ObjectId;
}
