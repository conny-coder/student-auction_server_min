"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteAuctionService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const favourite_auction_model_1 = require("./favourite-auction.model");
let FavouriteAuctionService = class FavouriteAuctionService {
    constructor(favouriteAuctionModel) {
        this.favouriteAuctionModel = favouriteAuctionModel;
    }
    async set(userId, auctionId) {
        const favouriteAuction = await this.favouriteAuctionModel.findOne({
            userId,
            auctionId,
        });
        if (favouriteAuction) {
            return this.favouriteAuctionModel.findByIdAndDelete(favouriteAuction._id);
        }
        return await this.favouriteAuctionModel.create({
            userId,
            auction: auctionId,
        });
    }
    async delete(userId, auctionId) {
        return await this.favouriteAuctionModel.findOneAndDelete({
            userId,
            auction: auctionId,
        });
    }
    async getAll(userId) {
        return await this.favouriteAuctionModel
            .find({ userId })
            .populate('auction')
            .exec();
    }
    async isFavourite(userId, auctionId) {
        const favouriteAuction = await this.favouriteAuctionModel.findOne({
            userId,
            auction: auctionId,
        });
        return !!favouriteAuction;
    }
};
FavouriteAuctionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(favourite_auction_model_1.FavouriteAuctionModel)),
    __metadata("design:paramtypes", [Object])
], FavouriteAuctionService);
exports.FavouriteAuctionService = FavouriteAuctionService;
//# sourceMappingURL=favourite-auction.service.js.map