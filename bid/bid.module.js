"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidModule = void 0;
const common_1 = require("@nestjs/common");
const bid_service_1 = require("./bid.service");
const bid_controller_1 = require("./bid.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const bid_model_1 = require("./bid.model");
const auction_module_1 = require("../auction/auction.module");
const user_module_1 = require("../user/user.module");
const notification_module_1 = require("../notification/notification.module");
let BidModule = class BidModule {
};
BidModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: bid_model_1.BidModel,
                    schemaOptions: {
                        collection: 'Bid',
                    },
                },
            ]),
            auction_module_1.AuctionModule,
            user_module_1.UserModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [bid_controller_1.BidController],
        providers: [bid_service_1.BidService],
        exports: [bid_service_1.BidService],
    })
], BidModule);
exports.BidModule = BidModule;
//# sourceMappingURL=bid.module.js.map