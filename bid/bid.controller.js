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
exports.BidController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const bid_service_1 = require("./bid.service");
const create_bid_dto_1 = require("./dto/create-bid.dto");
let BidController = class BidController {
    constructor(bidService) {
        this.bidService = bidService;
    }
    async create(userId, dto) {
        return this.bidService.create(userId, dto);
    }
    async getAuctionBids(auctionId) {
        return this.bidService.getAuctionBids(auctionId);
    }
    async getUserBids(userId) {
        return this.bidService.getUserBids(userId);
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
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, create_bid_dto_1.CreateBidDto]),
    __metadata("design:returntype", Promise)
], BidController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('auction/:id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], BidController.prototype, "getAuctionBids", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], BidController.prototype, "getUserBids", null);
BidController = __decorate([
    (0, common_1.Controller)('bid'),
    __metadata("design:paramtypes", [bid_service_1.BidService])
], BidController);
exports.BidController = BidController;
//# sourceMappingURL=bid.controller.js.map