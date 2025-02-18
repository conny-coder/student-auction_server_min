/// <reference types="mongoose/types/types" />
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { TypeReportStatus } from './report.interface';
export interface ReportModel extends Base {
}
export declare class ReportModel extends TimeStamps {
    title: string;
    text: string;
    reportedBy: Types.ObjectId;
    reportedTo?: string;
    status: TypeReportStatus;
}
