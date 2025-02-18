/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
export declare class SetReviewDto {
    userId: Types.ObjectId;
    rating: number;
    comment: string;
}
