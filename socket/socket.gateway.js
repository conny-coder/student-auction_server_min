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
exports.SocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const mongoose_1 = require("mongoose");
const message_service_1 = require("../message/message.service");
const common_1 = require("@nestjs/common");
let SocketGateway = class SocketGateway {
    constructor(messageService) {
        this.messageService = messageService;
    }
    afterInit(server) {
        console.log('Socket initialized');
    }
    handleConnection(client) {
        console.log(`User connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`User disconnected: ${client.id}`);
    }
    async handleMessage(data) {
        const { chatId, senderId, text, type, fileUrl } = data;
        if (!mongoose_1.Types.ObjectId.isValid(chatId) || !mongoose_1.Types.ObjectId.isValid(senderId)) {
            throw new common_1.BadRequestException('Невірний формат chatId або senderId');
        }
        if (!text && !fileUrl) {
            throw new common_1.BadRequestException('Повідомлення повинно містити текст або файл');
        }
        const message = await this.messageService.create(new mongoose_1.Types.ObjectId(senderId), {
            chatId: new mongoose_1.Types.ObjectId(chatId),
            type,
            text,
            fileUrl,
        });
        this.server.to(chatId).emit('newMessage', message);
        return message;
    }
    handleJoinChat(chatId, client) {
        client.join(chatId);
        console.log(`User joined chat ${chatId}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinChat'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], SocketGateway.prototype, "handleJoinChat", null);
SocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], SocketGateway);
exports.SocketGateway = SocketGateway;
//# sourceMappingURL=socket.gateway.js.map