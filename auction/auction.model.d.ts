/// <reference types="mongoose/types/types" />
import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
import { CategoryModel } from 'src/category/category.model';
import { LocationModel } from 'src/location/location.model';
import { TypeStatus } from './auction.interface';
export interface AuctionModel extends Base {
}
export declare class AuctionModel extends TimeStamps {
    title: string;
    description: string;
    images: string[];
    category: Ref<CategoryModel>;
    ownerId: Types.ObjectId;
    startPrice: number;
    currentBid: number;
    highestBidderId: Types.ObjectId;
    endTime: Date;
    status: TypeStatus;
    step: number;
    bidCount: number;
    condition: 'new' | 'used';
    location: Ref<LocationModel>;
}
