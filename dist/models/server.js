"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_route_1 = __importDefault(require("../routes/usuarios.route"));
class Server {
    constructor() {
        this.apiRoutes = {
            usuarios: "/usuarios"
        };
        this.app = (0, express_1.default)();
        // this.port = process.env.PORT || "8000";
        this.port = "8000";
        // Definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiRoutes.usuarios, usuarios_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en el puertoooo ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map