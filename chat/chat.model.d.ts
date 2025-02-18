/// <reference types="mongoose/types/types" />
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
export interface ChatModel extends Base {
}
export declare class ChatModel extends TimeStamps {
    user1: Types.ObjectId;
    user2: Types.ObjectId;
}
