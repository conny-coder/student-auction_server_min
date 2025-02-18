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
import { FavouriteAuctionService } from 'src/favourite-auction/favourite-auction.service';
import { TypeSortBy } from './auction.interface';
import { AuctionModel } from './auction.model';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { NotificationService } from 'src/notification/notification.service';
import { UserService } from 'src/user/user.service';
export declare class AuctionService {
    private readonly auctionModel;
    private readonly favouriteAuctionService;
    private readonly notificationService;
    private readonly userService;
    constructor(auctionModel: ModelType<AuctionModel>, favouriteAuctionService: FavouriteAuctionService, notificationService: NotificationService, userService: UserService);
    getCountByCategory(categoryId: Types.ObjectId): Promise<number>;
    getAuctionsByUser(userId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    create(ownerId: Types.ObjectId, dto: CreateAuctionDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateCurrentBid(userId: Types.ObjectId, auctionId: Types.ObjectId, amount: number): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getAll(filters: {
        category?: string;
        price?: string;
        condition?: 'new' | 'used';
        search: string;
        sortBy?: TypeSortBy;
    }, userId: Types.ObjectId): Promise<{
        isFavourite: boolean;
        title: string;
        description: string;
        images: string[];
        category: import("@typegoose/typegoose/lib/types").Ref<import("../category/category.model").CategoryModel, Types.ObjectId>;
        ownerId: Types.ObjectId;
        startPrice: number;
        currentBid: number;
        highestBidderId: Types.ObjectId;
        endTime: Date;
        status: import("./auction.interface").TypeStatus;
        step: number;
        bidCount: number;
        condition: "new" | "used";
        location: import("@typegoose/typegoose/lib/types").Ref<import("../location/location.model").LocationModel, Types.ObjectId>;
        createdAt?: Date;
        updatedAt?: Date;
        _id: Types.ObjectId;
        id: string;
    }[]>;
    completeAuction(userId: Types.ObjectId, auctionId: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getAuctionById(userId: Types.ObjectId, auctionId: Types.ObjectId): Promise<{
        isFavourite: boolean;
        title: string;
        description: string;
        images: string[];
        category: import("@typegoose/typegoose/lib/types").Ref<import("../category/category.model").CategoryModel, Types.ObjectId>;
        ownerId: Types.ObjectId;
        startPrice: number;
        currentBid: number;
        highestBidderId: Types.ObjectId;
        endTime: Date;
        status: import("./auction.interface").TypeStatus;
        step: number;
        bidCount: number;
        condition: "new" | "used";
        location: import("@typegoose/typegoose/lib/types").Ref<import("../location/location.model").LocationModel, Types.ObjectId>;
        createdAt?: Date;
        updatedAt?: Date;
        _id: Types.ObjectId;
        id: string;
    }>;
    checkAndCompleteAuctions(): Promise<void>;
    delete(userId: Types.ObjectId, auctionId: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateTimer(auctionId: Types.ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, AuctionModel> & Omit<AuctionModel & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}
