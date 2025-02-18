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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const mongoose_1 = require("mongoose");
const category_model_1 = require("../category/category.model");
const location_model_1 = require("../location/location.model");
const user_model_1 = require("../user/user.model");
class AuctionModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuctionModel.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuctionModel.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: [] }),
    __metadata("design:type", Array)
], AuctionModel.prototype, "images", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => category_model_1.CategoryModel }),
    __metadata("design:type", Object)
], AuctionModel.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.UserModel }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], AuctionModel.prototype, "ownerId", void 0);
__decorate([
    (0, typegoose_1.prop)({ min: 0 }),
    __metadata("design:type", Number)
], AuctionModel.prototype, "startPrice", void 0);
__decorate([
    (0, typegoose_1.prop)({
        default: function () {
            return this.startPrice;
        },
    }),
    __metadata("design:type", Number)
], AuctionModel.prototype, "currentBid", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.UserModel, default: null }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], AuctionModel.prototype, "highestBidderId", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => Date }),
    __metadata("design:type", Date)
], AuctionModel.prototype, "endTime", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 'active' }),
    __metadata("design:type", String)
], AuctionModel.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 10 }),
    __metadata("design:type", Number)
], AuctionModel.prototype, "step", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], AuctionModel.prototype, "bidCount", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], AuctionModel.prototype, "condition", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => location_model_1.LocationModel }),
    __metadata("design:type", Object)
], AuctionModel.prototype, "location", void 0);
exports.AuctionModel = AuctionModel;
//# sourceMappingURL=auction.model.js.map