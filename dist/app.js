"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Routes_1 = require("./routes/Routes");
class App {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.routePrv = new Routes_1.Routes();
        this.routePrv.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map