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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_service_1 = require("../user/user.service");
const transaction_model_1 = require("./transaction.model");
let TransactionService = class TransactionService {
    constructor(transactionModel, userService) {
        this.transactionModel = transactionModel;
        this.userService = userService;
    }
    async create(userId, dto) {
        const user = await this.userService.getById(userId);
        if (!user) {
            throw new common_1.NotFoundException('Користувача не знайдено');
        }
        if (dto.type === 'withdrawal') {
            if (user.balance < dto.amount)
                throw new common_1.BadRequestException('Недостатньо коштів');
            user.balance = user.balance - dto.amount;
            user.save();
        }
        if (dto.type === 'deposit' || dto.type === 'payout') {
            user.balance = user.balance + dto.amount;
            user.save();
        }
        return await this.transactionModel.create(Object.assign(Object.assign({}, dto), { userId }));
    }
    async getUserTransactions(userId) {
        return await this.transactionModel
            .find({ userId })
            .sort({ date: -1 })
            .exec();
    }
    async getTransactionById(transactionId) {
        const transaction = await this.transactionModel
            .findById(transactionId)
            .exec();
        if (!transaction) {
            throw new common_1.NotFoundException('Транзакція не знайдена');
        }
        return await this.transactionModel.findById(transactionId).exec();
    }
    async delete(transactionId) {
        const transaction = await this.transactionModel
            .findById(transactionId)
            .exec();
        if (!transaction) {
            throw new common_1.NotFoundException('Транзакція не знайдена');
        }
        return await this.transactionModel.findByIdAndDelete(transactionId).exec();
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(transaction_model_1.TransactionModel)),
    __metadata("design:paramtypes", [Object, user_service_1.UserService])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map