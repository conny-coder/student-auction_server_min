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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const auction_model_1 = require("../auction/auction.model");
const bid_model_1 = require("../bid/bid.model");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    constructor(userModel, bidModel, auctionModel) {
        this.userModel = userModel;
        this.bidModel = bidModel;
        this.auctionModel = auctionModel;
    }
    async getAll() {
        return this.userModel.find().exec();
    }
    async updateRating(id, newRating) {
        return this.userModel
            .findByIdAndUpdate(id, {
            rating: newRating,
        }, { new: true })
            .exec();
    }
    async getById(id) {
        const user = await this.userModel.findById(id).select('-password').exec();
        if (!user) {
            throw new common_1.NotFoundException('Користувач з таким id не знайдено');
        }
        return user;
    }
    async getProfile(id) {
        const user = await this.getById(id);
        const bids = await this.bidModel.find({ userId: id }).exec();
        const winnerAuctions = await this.auctionModel
            .find({
            status: 'completed',
            highestBidderId: id,
        })
            .exec();
        const soldAuctions = await this.auctionModel
            .find({
            status: 'completed',
            ownerId: id,
            highestBidderId: { $ne: null },
        })
            .exec();
        return Object.assign(Object.assign({}, user.toObject()), { bidsCount: bids.length, winnerCount: winnerAuctions.length, soldCount: soldAuctions.length });
    }
    async updateUser(id, dto) {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new common_1.NotFoundException('Користувач з таким id не знайдено');
        }
        return this.userModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async changePassword(userId, dto) {
        const user = await this.getById(userId);
        const isMatch = await (0, bcryptjs_1.compare)(dto.oldPassword, user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Невірний старий пароль');
        }
        const salt = await (0, bcryptjs_1.genSalt)(10);
        user.password = await (0, bcryptjs_1.hash)(dto.password, salt);
        await user.save();
        return;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __param(1, (0, nestjs_typegoose_1.InjectModel)(bid_model_1.BidModel)),
    __param(2, (0, nestjs_typegoose_1.InjectModel)(auction_model_1.AuctionModel)),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map