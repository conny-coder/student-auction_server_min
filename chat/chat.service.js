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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const message_service_1 = require("../message/message.service");
const chat_model_1 = require("./chat.model");
let ChatService = class ChatService {
    constructor(chatModel, messageService) {
        this.chatModel = chatModel;
        this.messageService = messageService;
    }
    async create(user1, user2) {
        return this.chatModel.create({ user1, user2 });
    }
    async getAll(userId) {
        return this.chatModel.find({ $or: [{ user1: userId }, { user2: userId }] });
    }
    async getById(chatId) {
        const chat = await this.chatModel.findById(chatId).exec();
        if (!chat) {
            throw new common_1.NotFoundException('Чат не знайдено');
        }
        const messages = await this.messageService.getAllByChat(chatId);
        return {
            chat,
            messages,
        };
    }
    async delete(chatId) {
        const chat = await this.chatModel.findById(chatId);
        if (!chat) {
            throw new common_1.NotFoundException('Чат не знайдено');
        }
        return this.chatModel.findByIdAndDelete(chatId);
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(chat_model_1.ChatModel)),
    __metadata("design:paramtypes", [Object, message_service_1.MessageService])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map