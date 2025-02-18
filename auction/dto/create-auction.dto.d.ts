/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
export declare class CreateAuctionDto {
    title: string;
    description: string;
    images: string[];
    category: Types.ObjectId;
    startPrice: number;
    endTime: Date;
    step: number;
    condition: 'new' | 'used';
    location: Types.ObjectId;
}
