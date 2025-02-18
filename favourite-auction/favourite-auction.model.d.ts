import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { AuctionModel } from 'src/auction/auction.model';
import { UserModel } from 'src/user/user.model';
export interface FavouriteAuctionModel extends Base {
}
export declare class FavouriteAuctionModel extends TimeStamps {
    userId: Ref<UserModel>;
    auction: Ref<AuctionModel>;
}
