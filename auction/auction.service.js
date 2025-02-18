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
exports.AuctionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const favourite_auction_service_1 = require("../favourite-auction/favourite-auction.service");
const auction_model_1 = require("./auction.model");
const schedule_1 = require("@nestjs/schedule");
const notification_service_1 = require("../notification/notification.service");
const user_service_1 = require("../user/user.service");
let AuctionService = class AuctionService {
    constructor(auctionModel, favouriteAuctionService, notificationService, userService) {
        this.auctionModel = auctionModel;
        this.favouriteAuctionService = favouriteAuctionService;
        this.notificationService = notificationService;
        this.userService = userService;
    }
    async getCountByCategory(categoryId) {
        return await this.auctionModel
            .countDocuments({ category: categoryId })
            .exec();
    }
    async getAuctionsByUser(userId) {
        return await this.auctionModel.find({ ownerId: userId }).exec();
    }
    async create(ownerId, dto) {
        return await this.auctionModel.create(Object.assign(Object.assign({}, dto), { ownerId }));
    }
    async updateCurrentBid(userId, auctionId, amount) {
        return await this.auctionModel
            .findByIdAndUpdate(auctionId, { currentBid: amount, $inc: { bidCount: 1 }, highestBidderId: userId }, { new: true })
            .exec();
    }
    async getAll(filters, userId) {
        const filterQuery = {};
        if (filters.price) {
            const [min, max] = filters.price.split('-');
            filterQuery.currentBid = { $gte: min, $lte: max };
        }
        if (filters.category) {
            const categoryList = filters.category.split(',');
            filterQuery.category = { $in: categoryList };
        }
        if (filters.condition) {
            filterQuery.condition = filters.condition;
        }
        if (filters.search) {
            const searchRegex = new RegExp(filters.search, 'i');
            filterQuery.$or = [
                { title: { $regex: searchRegex } },
                { description: { $regex: searchRegex } },
            ];
        }
        let sortQuery = {};
        sortQuery.status = 1;
        if (filters.sortBy) {
            switch (filters.sortBy) {
                case 'newest':
                    sortQuery.createdAt = -1;
                    break;
                case 'popularity':
                    sortQuery.bidCount = -1;
                    break;
                case 'priceUp':
                    sortQuery.currentBid = 1;
                    break;
                case 'priceDown':
                    sortQuery.currentBid = -1;
                    break;
                default:
                    break;
            }
        }
        const favorites = await this.favouriteAuctionService.getAll(userId);
        const favouriteAuctionIds = favorites.map((favorite) => favorite.auction._id.toString());
        const auctions = await this.auctionModel
            .find(filterQuery)
            .sort(sortQuery)
            .exec();
        const auctionsWithFavorites = auctions.map((auction) => (Object.assign(Object.assign({}, auction.toObject()), { isFavourite: favouriteAuctionIds.includes(auction._id.toString()) })));
        const sortedAuctions = auctionsWithFavorites.sort((a, b) => +b.isFavourite - +a.isFavourite);
        return sortedAuctions;
    }
    async completeAuction(userId, auctionId) {
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (!userId.equals(auction.ownerId)) {
            throw new common_1.BadRequestException('Ви не можете завершити цей аукціон');
        }
        if (!auction) {
            throw new common_1.NotFoundException('Аукціон не знайдено');
        }
        auction.status = 'completed';
        await auction.save();
        await this.notificationService.createNotification({
            auction: auction._id,
            userId: auction.ownerId,
            type: auction.highestBidderId
                ? 'auction_ended'
                : 'auction_ended_no_buyer',
        });
        if (auction.highestBidderId) {
            await this.notificationService.createNotification({
                auction: auction._id,
                userId: auction.highestBidderId,
                type: 'auction_won',
            });
        }
        return auction;
    }
    async getAuctionById(userId, auctionId) {
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (!auction) {
            throw new common_1.NotFoundException('Аукціон не знайдено');
        }
        const auctionWithIsFavourite = Object.assign(Object.assign({}, auction.toObject()), { isFavourite: await this.favouriteAuctionService.isFavourite(userId, auctionId) });
        return auctionWithIsFavourite;
    }
    async checkAndCompleteAuctions() {
        const now = new Date();
        const expiredAuctions = await this.auctionModel
            .find({
            endTime: { $lte: now },
            status: { $ne: 'completed' },
        })
            .exec();
        for (const auction of expiredAuctions) {
            auction.status = 'completed';
            await auction.save();
            await this.notificationService.createNotification({
                auction: auction._id,
                userId: auction.ownerId,
                type: auction.highestBidderId
                    ? 'auction_ended'
                    : 'auction_ended_no_buyer',
            });
            if (auction.highestBidderId) {
                await this.notificationService.createNotification({
                    auction: auction._id,
                    userId: auction.highestBidderId,
                    type: 'auction_won',
                });
            }
        }
    }
    async delete(userId, auctionId) {
        const owner = await this.userService.getById(userId);
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (!auction) {
            throw new common_1.NotFoundException('Аукціон не знайдено');
        }
        if (!userId.equals(new mongoose_1.Types.ObjectId(auction.ownerId)) && !owner.isAdmin) {
            throw new common_1.BadRequestException('Ви не можете видалити цей аукціон');
        }
        if (auction.highestBidderId) {
            const highestBidder = await this.userService.getById(auction.highestBidderId);
            if (highestBidder) {
                await this.userService.updateUser(highestBidder._id, {
                    balance: highestBidder.balance + auction.currentBid,
                });
            }
        }
        return await this.auctionModel.findByIdAndDelete(auctionId).exec();
    }
    async updateTimer(auctionId) {
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (!auction) {
            throw new common_1.NotFoundException('Аукціон не знайдено');
        }
        const newEndTime = new Date(auction.endTime.getTime() + 5 * 60 * 1000);
        return await this.auctionModel
            .findByIdAndUpdate(auctionId, { endTime: newEndTime }, { new: true })
            .exec();
    }
};
__decorate([
    (0, schedule_1.Cron)('*/1 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuctionService.prototype, "checkAndCompleteAuctions", null);
AuctionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(auction_model_1.AuctionModel)),
    __metadata("design:paramtypes", [Object, favourite_auction_service_1.FavouriteAuctionService,
        notification_service_1.NotificationService,
        user_service_1.UserService])
], AuctionService);
exports.AuctionService = AuctionService;
//# sourceMappingURL=auction.service.js.map