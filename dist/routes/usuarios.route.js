"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.get(`/`, usuarios_controller_1.getAllUsuarios);
router.get(`/:_id`, usuarios_controller_1.getUsuarioById);
router.post(`/`, usuarios_controller_1.createUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.route.js.map