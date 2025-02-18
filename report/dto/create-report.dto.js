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
exports.CreateReportDto = void 0;
const mongoose_1 = require("mongoose");
const class_validator_mongo_object_id_1 = require("class-validator-mongo-object-id");
const class_validator_1 = require("class-validator");
class CreateReportDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_mongo_object_id_1.IsObjectId)({ message: 'Id користувача не коректний' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateReportDto.prototype, "reportedTo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Текст має бути рядком' }),
    (0, class_validator_1.MinLength)(10, { message: 'Текст повинен бути не менше 10 символів' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Текст повинен бути не більше 200 символів' }),
    __metadata("design:type", String)
], CreateReportDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Заголовок має бути рядком' }),
    (0, class_validator_1.MinLength)(5, { message: 'Заголовок повинен бути не менше 10 символів' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Заголовок повинен бути не більше 50 символів' }),
    __metadata("design:type", String)
], CreateReportDto.prototype, "title", void 0);
exports.CreateReportDto = CreateReportDto;
//# sourceMappingURL=create-report.dto.js.map