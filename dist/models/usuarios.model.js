"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// Creacion de modelo
const CamposTabla = {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        require: true
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        default: true
    }
};
const UsuariosSchema = connection_1.default.define('usuarios', CamposTabla);
exports.default = UsuariosSchema;
//# sourceMappingURL=usuarios.model.js.map