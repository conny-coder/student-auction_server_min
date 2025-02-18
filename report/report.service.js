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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const report_model_1 = require("./report.model");
let ReportService = class ReportService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
    async create(reportedBy, dto) {
        return await this.reportModel.create(Object.assign(Object.assign({}, dto), { reportedBy }));
    }
    async getAll(type) {
        const filter = type ? { status: type } : {};
        return await this.reportModel.find(filter).exec();
    }
    async getById(id) {
        return await this.reportModel.findById(id).exec();
    }
    async delete(id) {
        return await this.reportModel.findByIdAndDelete(id).exec();
    }
    async respondToReport(id) {
        return await this.reportModel
            .findByIdAndUpdate(id, { type: 'resolved' }, { new: true })
            .exec();
    }
};
ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(report_model_1.ReportModel)),
    __metadata("design:paramtypes", [Object])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map