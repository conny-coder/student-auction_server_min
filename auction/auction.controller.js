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
exports.AuctionController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const auction_service_1 = require("./auction.service");
const create_auction_dto_1 = require("./dto/create-auction.dto");
let AuctionController = class AuctionController {
    constructor(auctionService) {
        this.auctionService = auctionService;
    }
    async create(ownerId, dto) {
        return this.auctionService.create(ownerId, dto);
    }
    async getAll(userId, category, price, condition, search, sortBy) {
        return this.auctionService.getAll({
            category,
            price,
            condition,
            search,
            sortBy,
        }, userId);
    }
    async getAuctionsByUser(userId) {
        return this.auctionService.getAuctionsByUser(userId);
    }
    async completeAuction(userId, auctionId) {
        return this.auctionService.completeAuction(userId, auctionId);
    }
    async getAuctionById(userId, auctionId) {
        return this.auctionService.getAuctionById(userId, auctionId);
    }
    async deleteAuction(userId, auctionId) {
        return this.auctionService.delete(userId, auctionId);
    }
};
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, create_auction_dto_1.CreateAuctionDto]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('price')),
    __param(3, (0, common_1.Query)('condition')),
    __param(4, (0, common_1.Query)('search')),
    __param(5, (0, common_1.Query)('sortBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "getAuctionsByUser", null);
__decorate([
    (0, common_1.Put)('complete/:auctionId'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "completeAuction", null);
__decorate([
    (0, common_1.Get)(':auctionId'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "getAuctionById", null);
__decorate([
    (0, common_1.Delete)(':auctionId'),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)('_id')),
    __param(1, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "deleteAuction", null);
AuctionController = __decorate([
    (0, common_1.Controller)('auction'),
    __metadata("design:paramtypes", [auction_service_1.AuctionService])
], AuctionController);
exports.AuctionController = AuctionController;
//# sourceMappingURL=auction.controller.js.map