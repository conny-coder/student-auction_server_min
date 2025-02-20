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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const auction_service_1 = require("../auction/auction.service");
const category_model_1 = require("./category.model");
let CategoryService = class CategoryService {
    constructor(categoryModel, auctionService) {
        this.categoryModel = categoryModel;
        this.auctionService = auctionService;
    }
    async getAll() {
        const categories = await this.categoryModel.find().exec();
        const categoryCounts = await Promise.all(categories.map(async (category) => {
            const count = await this.auctionService.getCountByCategory(category._id);
            return {
                id: category._id,
                name: category.name,
                count: count,
                slug: category.slug,
            };
        }));
        return categoryCounts;
    }
    async create(dto) {
        return await this.categoryModel.create(Object.assign({}, dto));
    }
    async delete(id) {
        return await this.categoryModel.findByIdAndDelete(id).exec();
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(category_model_1.CategoryModel)),
    __metadata("design:paramtypes", [Object, auction_service_1.AuctionService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map