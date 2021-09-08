"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DB_NAME = 'rest_server_ts_express_sequelize';
const DB_USER = 'postgres';
const DB_PASS = 'malow9204';
const DB_CONFIG = {
    host: 'localhost',
    dialect: 'postgres'
};
const db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
exports.default = db;
//# sourceMappingURL=connection.js.map