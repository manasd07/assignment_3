"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.JWT_SECRET = process.env['JWT_SECRET'];
if (!exports.JWT_SECRET) {
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map