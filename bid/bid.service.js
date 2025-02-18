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
exports.BidService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const auction_service_1 = require("../auction/auction.service");
const notification_service_1 = require("../notification/notification.service");
const user_service_1 = require("../user/user.service");
const bid_model_1 = require("./bid.model");
let BidService = class BidService {
    constructor(bidModel, auctionService, userService, notificationService) {
        this.bidModel = bidModel;
        this.auctionService = auctionService;
        this.userService = userService;
        this.notificationService = notificationService;
    }
    async create(userId, dto) {
        const auction = await this.auctionService.getAuctionById(userId, dto.auctionId);
        const newBider = await this.userService.getById(userId);
        if (auction.highestBidderId && auction.highestBidderId.equals(userId)) {
            newBider.balance = newBider.balance + auction.currentBid;
            newBider.save();
        }
        this.validateAuction(auction);
        this.validateUser(newBider, dto.amount, auction);
        await this.handlePreviousBidder(auction);
        await this.userService.updateUser(userId, {
            balance: newBider.balance - dto.amount,
        });
        await this.auctionService.updateCurrentBid(userId, dto.auctionId, dto.amount);
        await this.updateAuctionIfNeeded(auction);
        return await this.bidModel.create(Object.assign(Object.assign({}, dto), { userId }));
    }
    validateAuction(auction) {
        if (auction.status === 'completed') {
            throw new common_1.BadRequestException('Аукціон завершено');
        }
    }
    validateUser(newBider, bidAmount, auction) {
        if (!newBider) {
            throw new common_1.BadRequestException('Користувача не знайдено');
        }
        if (newBider.balance < bidAmount) {
            throw new common_1.BadRequestException('Недостатньо коштів');
        }
        const neededNextBid = auction.currentBid + auction.step;
        if (bidAmount < neededNextBid) {
            throw new common_1.BadRequestException('Ціна повинна бути більшою за поточну');
        }
    }
    async handlePreviousBidder(auction) {
        if (auction.highestBidderId) {
            const previousBidder = await this.userService.getById(auction.highestBidderId);
            if (previousBidder) {
                await this.userService.updateUser(auction.highestBidderId, {
                    balance: previousBidder.balance + auction.currentBid,
                });
                await this.notificationService.createNotification({
                    auction: auction._id,
                    userId: auction.highestBidderId,
                    type: 'auction_lost',
                });
            }
        }
    }
    async updateAuctionIfNeeded(auction) {
        const currentDate = new Date();
        if (auction.endTime &&
            auction.endTime.getTime() - currentDate.getTime() < 5 * 60 * 1000) {
            await this.auctionService.updateTimer(auction._id);
        }
    }
    async getAuctionBids(auctionId) {
        return await this.bidModel.find({ auctionId }).exec();
    }
    async getUserBids(userId) {
        return await this.bidModel.find({ userId }).exec();
    }
};
BidService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(bid_model_1.BidModel)),
    __metadata("design:paramtypes", [Object, auction_service_1.AuctionService,
        user_service_1.UserService,
        notification_service_1.NotificationService])
], BidService);
exports.BidService = BidService;
//# sourceMappingURL=bid.service.js.map