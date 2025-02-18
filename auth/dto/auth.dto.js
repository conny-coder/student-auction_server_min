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
exports.AuthRegisterDto = exports.AuthLoginDto = void 0;
const class_validator_1 = require("class-validator");
class AuthLoginDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthLoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'Пароль не може бути менше 6 символів!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthLoginDto.prototype, "password", void 0);
exports.AuthLoginDto = AuthLoginDto;
class AuthRegisterDto extends AuthLoginDto {
}
__decorate([
    (0, class_validator_1.MinLength)(4, { message: 'Username не може бути менше 4 символів!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "name", void 0);
exports.AuthRegisterDto = AuthRegisterDto;
//# sourceMappingURL=auth.dto.js.map