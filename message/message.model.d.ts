import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ChatModel } from 'src/chat/chat.model';
import { UserModel } from 'src/user/user.model';
import { MessageType } from './message.interface';
export interface MessageModel extends Base {
}
export declare class MessageModel extends TimeStamps {
    senderId: Ref<UserModel>;
    chatId: Ref<ChatModel>;
    type: MessageType;
    fileUrl?: string;
    text?: string;
}
