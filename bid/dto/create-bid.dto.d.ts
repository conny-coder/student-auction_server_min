/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
export declare class CreateBidDto {
    auctionId: Types.ObjectId;
    amount: number;
}
