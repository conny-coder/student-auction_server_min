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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const bcryptjs_1 = require("bcryptjs");
const user_model_1 = require("../user/user.model");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(UserModel, jwtService) {
        this.UserModel = UserModel;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async getNewTokens({ refreshToken }) {
        if (!refreshToken)
            throw new common_1.UnauthorizedException('Зареєструйтесь!');
        const result = await this.jwtService.verifyAsync(refreshToken);
        if (!result)
            throw new common_1.UnauthorizedException('Некоректний refreshToken');
        const user = await this.UserModel.findById(result._id);
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async register(dto) {
        const oldUser = await this.UserModel.findOne({
            $or: [{ email: dto.email }, { userName: dto.userName }],
        });
        if (oldUser)
            throw new common_1.BadRequestException('Користувач з таким email або userName вже існує!');
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = new this.UserModel({
            email: dto.email,
            password: await (0, bcryptjs_1.hash)(dto.password, salt),
            userName: dto.userName,
            name: dto.name || 'Користувач',
        });
        const user = await newUser.save();
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async validateUser(dto) {
        const user = await this.UserModel.findOne({ email: dto.email });
        if (!user)
            throw new common_1.UnauthorizedException('Користувач не знайдений');
        const isValidPassword = await (0, bcryptjs_1.compare)(dto.password, user.password);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException('Неправильний пароль');
        return user;
    }
    async issueTokenPair(userId) {
        const data = { _id: userId };
        const refreshToken = await this.jwtService.signAsync(data, {
            expiresIn: '15d',
        });
        const accessToken = await this.jwtService.signAsync(data, {
            expiresIn: '1h',
        });
        return { refreshToken, accessToken };
    }
    returnUserFields(user) {
        return {
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            userName: user.userName,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map