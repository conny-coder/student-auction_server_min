"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class idValidationPipe {
    transform(value, metadata) {
        if (metadata.type !== 'param')
            return value;
        if (!mongoose_1.Types.ObjectId.isValid(value)) {
            throw new common_1.BadRequestException('Некоректний Id');
        }
        return value;
    }
}
exports.idValidationPipe = idValidationPipe;
//# sourceMappingURL=id.validation.pipe.js.map