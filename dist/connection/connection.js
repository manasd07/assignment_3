"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.connection = typeorm_1.createConnection({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "Password*123",
    database: process.env.DB_SCHEMA || "test",
    entities: [User_1.default],
    synchronize: true,
    logging: false,
});
exports.default = exports.connection;
//# sourceMappingURL=connection.js.map