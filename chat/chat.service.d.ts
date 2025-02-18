/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { MessageService } from 'src/message/message.service';
import { ChatModel } from './chat.model';
export declare class ChatService {
    private readonly chatModel;
    private readonly messageService;
    constructor(chatModel: ModelType<ChatModel>, messageService: MessageService);
    create(user1: Types.ObjectId, user2: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ChatModel> & Omit<ChatModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getAll(userId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ChatModel> & Omit<ChatModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getById(chatId: Types.ObjectId): Promise<{
        chat: import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ChatModel> & Omit<ChatModel & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction;
        messages: (import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("../message/message.model").MessageModel> & Omit<import("../message/message.model").MessageModel & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[];
    }>;
    delete(chatId: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, ChatModel> & Omit<ChatModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}
