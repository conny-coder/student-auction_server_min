"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteAuctionModule = void 0;
const common_1 = require("@nestjs/common");
const favourite_auction_service_1 = require("./favourite-auction.service");
const favourite_auction_controller_1 = require("./favourite-auction.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const favourite_auction_model_1 = require("./favourite-auction.model");
let FavouriteAuctionModule = class FavouriteAuctionModule {
};
FavouriteAuctionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: favourite_auction_model_1.FavouriteAuctionModel,
                    schemaOptions: {
                        collection: 'FavouriteAuction',
                    },
                },
            ]),
        ],
        controllers: [favourite_auction_controller_1.FavouriteAuctionController],
        providers: [favourite_auction_service_1.FavouriteAuctionService],
        exports: [favourite_auction_service_1.FavouriteAuctionService],
    })
], FavouriteAuctionModule);
exports.FavouriteAuctionModule = FavouriteAuctionModule;
//# sourceMappingURL=favourite-auction.module.js.map