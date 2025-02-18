"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const mongo_config_1 = require("./config/mongo.config");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const review_module_1 = require("./review/review.module");
const notification_module_1 = require("./notification/notification.module");
const auction_module_1 = require("./auction/auction.module");
const category_module_1 = require("./category/category.module");
const favourite_auction_module_1 = require("./favourite-auction/favourite-auction.module");
const bid_module_1 = require("./bid/bid.module");
const report_module_1 = require("./report/report.module");
const transaction_module_1 = require("./transaction/transaction.module");
const file_module_1 = require("./file/file.module");
const chat_module_1 = require("./chat/chat.module");
const message_module_1 = require("./message/message.module");
const socket_gateway_1 = require("./socket/socket.gateway");
const location_module_1 = require("./location/location.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            nestjs_typegoose_1.TypegooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.getMongoDbConfig,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            review_module_1.ReviewModule,
            notification_module_1.NotificationModule,
            auction_module_1.AuctionModule,
            category_module_1.CategoryModule,
            favourite_auction_module_1.FavouriteAuctionModule,
            bid_module_1.BidModule,
            report_module_1.ReportModule,
            transaction_module_1.TransactionModule,
            file_module_1.FileModule,
            chat_module_1.ChatModule,
            message_module_1.MessageModule,
            location_module_1.LocationModule,
        ],
        providers: [socket_gateway_1.SocketGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map