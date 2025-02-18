/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
export declare class CreateReportDto {
    reportedTo?: Types.ObjectId;
    text: string;
    title: string;
}
