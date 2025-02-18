/// <reference types="mongoose/types/types" />
import { Types } from 'mongoose';
import { MessageType } from '../message.interface';
export declare class CreateMessageDto {
    chatId: Types.ObjectId;
    type: MessageType;
    text?: string;
    fileUrl?: string;
}
