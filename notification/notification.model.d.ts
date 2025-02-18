import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { AuctionModel } from 'src/auction/auction.model';
import { UserModel } from 'src/user/user.model';
import { TypeNotification } from './notification.interface';
export interface NotificationModel extends Base {
}
export declare class NotificationModel extends TimeStamps {
    userId: Ref<UserModel>;
    type: TypeNotification;
    isRead: boolean;
    auction: Ref<AuctionModel>;
}
