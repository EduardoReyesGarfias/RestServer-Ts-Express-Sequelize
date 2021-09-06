import dotenv from "dotenv";
import Server from './models/server';

// Lee lo que esta en el archivo .env
dotenv.config();

const server = new Server;
server.listen();