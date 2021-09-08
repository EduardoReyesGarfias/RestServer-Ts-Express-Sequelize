import { Options, Sequelize } from "sequelize";

const DB_NAME = 'rest_server_ts_express_sequelize';
const DB_USER = 'postgres';
const DB_PASS = 'malow9204'; 
const DB_CONFIG: Options = {
    host: 'localhost',
    dialect: 'postgres'
}

const db = new Sequelize( DB_NAME, DB_USER, DB_PASS, DB_CONFIG );

export default db;