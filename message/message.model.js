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
exports.MessageModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const chat_model_1 = require("../chat/chat.model");
const user_model_1 = require("../user/user.model");
class MessageModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.UserModel }),
    __metadata("design:type", Object)
], MessageModel.prototype, "senderId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => chat_model_1.ChatModel }),
    __metadata("design:type", Object)
], MessageModel.prototype, "chatId", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: ['text', 'file'] }),
    __metadata("design:type", String)
], MessageModel.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", String)
], MessageModel.prototype, "fileUrl", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", String)
], MessageModel.prototype, "text", void 0);
exports.MessageModel = MessageModel;
//# sourceMappingURL=message.model.js.map