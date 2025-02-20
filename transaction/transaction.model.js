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
exports.TransactionModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const mongoose_1 = require("mongoose");
const user_model_1 = require("../user/user.model");
class TransactionModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => user_model_1.UserModel }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], TransactionModel.prototype, "userId", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: ['withdrawal', 'deposit', 'payment', 'payout'] }),
    __metadata("design:type", String)
], TransactionModel.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], TransactionModel.prototype, "amount", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], TransactionModel.prototype, "transactionToId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], TransactionModel.prototype, "transactionById", void 0);
exports.TransactionModel = TransactionModel;
//# sourceMappingURL=transaction.model.js.map