"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.setGlobalPrefix('api');
    app.enableCors();
    await app.listen(4200);
}
bootstrap();
//# sourceMappingURL=main.js.map