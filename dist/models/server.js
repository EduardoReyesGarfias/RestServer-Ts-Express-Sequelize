"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_route_1 = __importDefault(require("../routes/usuarios.route"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiRoutes = {
            usuarios: "/usuarios"
        };
        this.app = (0, express_1.default)();
        // this.port = process.env.PORT || "8000";
        this.port = "8000";
        // Metodos iniciales
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // cors
        this.app.use((0, cors_1.default)());
        // Parseo al hacer POST
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // Carpeta public
        this.app.use(express_1.default.static('public'));
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