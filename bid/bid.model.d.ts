import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { AuctionModel } from 'src/auction/auction.model';
import { UserModel } from 'src/user/user.model';
export interface BidModel extends Base {
}
export declare class BidModel extends TimeStamps {
    userId: Ref<UserModel>;
    auctionId: Ref<AuctionModel>;
    amount: number;
}
