/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
import { TypeNotification } from '../notification.interface';
export declare class CreateNotificationDto {
    userId: Types.ObjectId;
    type: TypeNotification;
    auction: Types.ObjectId;
}
