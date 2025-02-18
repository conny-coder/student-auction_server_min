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
exports.FavouriteAuctionController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const favourite_auction_service_1 = require("./favourite-auction.service");
let FavouriteAuctionController = class FavouriteAuctionController {
    constructor(favouriteAuctionService) {
        this.favouriteAuctionService = favouriteAuctionService;
    }
    async set(userId, auctionId) {
        return this.favouriteAuctionService.set(userId, auctionId);
    }
    async delete(userId, auctionId) {
        return this.favouriteAuctionService.delete(userId, auctionId);
    }
    async getAll(userId) {
        return this.favouriteAuctionService.getAll(userId);
    }
};
__decorate([
    (0, common_1.Post)(':auctionId'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], FavouriteAuctionController.prototype, "set", null);
__decorate([
    (0, common_1.Delete)(':auctionId'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], FavouriteAuctionController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], FavouriteAuctionController.prototype, "getAll", null);
FavouriteAuctionController = __decorate([
    (0, common_1.Controller)('favourite-auction'),
    __metadata("design:paramtypes", [favourite_auction_service_1.FavouriteAuctionService])
], FavouriteAuctionController);
exports.FavouriteAuctionController = FavouriteAuctionController;
//# sourceMappingURL=favourite-auction.controller.js.map