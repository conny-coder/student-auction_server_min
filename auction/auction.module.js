"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionModule = void 0;
const common_1 = require("@nestjs/common");
const auction_service_1 = require("./auction.service");
const auction_controller_1 = require("./auction.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const auction_model_1 = require("./auction.model");
const favourite_auction_module_1 = require("../favourite-auction/favourite-auction.module");
const notification_module_1 = require("../notification/notification.module");
const user_module_1 = require("../user/user.module");
let AuctionModule = class AuctionModule {
};
AuctionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: auction_model_1.AuctionModel,
                    schemaOptions: {
                        collection: 'Auction',
                    },
                },
            ]),
            favourite_auction_module_1.FavouriteAuctionModule,
            notification_module_1.NotificationModule,
            user_module_1.UserModule,
        ],
        controllers: [auction_controller_1.AuctionController],
        providers: [auction_service_1.AuctionService],
        exports: [auction_service_1.AuctionService],
    })
], AuctionModule);
exports.AuctionModule = AuctionModule;
//# sourceMappingURL=auction.module.js.map