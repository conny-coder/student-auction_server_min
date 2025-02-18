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
exports.CreateAuctionDto = void 0;
const class_validator_1 = require("class-validator");
const class_validator_mongo_object_id_1 = require("class-validator-mongo-object-id");
const mongoose_1 = require("mongoose");
class CreateAuctionDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "Заголовок є обов'язковим полем" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Заголовок не може бути порожнім' }),
    __metadata("design:type", String)
], CreateAuctionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Опис є обов'язковим полем" }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Опис не може бути порожнім' }),
    __metadata("design:type", String)
], CreateAuctionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Поле зображень має бути масивом' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Додайте хоча би одне зображення' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Кожне зображення має бути рядком' }),
    __metadata("design:type", Array)
], CreateAuctionDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_mongo_object_id_1.IsObjectId)({ message: 'Категорія має бути валідним ObjectId' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAuctionDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Стартова ціна повинна бути числом' }),
    (0, class_validator_1.Min)(0, { message: "Стартова ціна не може бути від'ємною" }),
    (0, class_validator_1.IsPositive)({ message: 'Стартова ціна повинна бути більше нуля' }),
    __metadata("design:type", Number)
], CreateAuctionDto.prototype, "startPrice", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Дата закінчення аукціону має бути датою' }),
    __metadata("design:type", Date)
], CreateAuctionDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Крок повинен бути числом' }),
    (0, class_validator_1.Min)(10, { message: 'Крок повинен бути не менше 10' }),
    __metadata("design:type", Number)
], CreateAuctionDto.prototype, "step", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['new', 'used'], { message: 'Умова повинна бути "new" або "used"' }),
    __metadata("design:type", String)
], CreateAuctionDto.prototype, "condition", void 0);
__decorate([
    (0, class_validator_mongo_object_id_1.IsObjectId)({ message: 'Локація має бути валідним ObjectId' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateAuctionDto.prototype, "location", void 0);
exports.CreateAuctionDto = CreateAuctionDto;
//# sourceMappingURL=create-auction.dto.js.map