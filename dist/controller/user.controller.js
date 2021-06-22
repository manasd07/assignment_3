"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const connection_1 = require("../connection/connection");
const User_1 = require("../entity/User");
class UserController {
    getAllCustomers(req, res) {
        connection_1.connection
            .then((connectionDetails) => __awaiter(this, void 0, void 0, function* () {
            return res.json({ message: "Customer Get Request", details: connectionDetails });
        }))
            .catch((error) => {
            // console.error("Error ", error);
            res.json(error);
        });
    }
    addCustomer(req, res) {
        connection_1.connection
            .then((conn) => __awaiter(this, void 0, void 0, function* () {
            const requestSuperHero = req.body;
            const requestPower = requestSuperHero.power;
            const superHero = new User_1.default();
            superHero.firstName = requestSuperHero.name;
            superHero.lastName = "";
            requestPower.forEach((reqPower) => {
                const power = new User_1.default();
                power.firstName = reqPower;
            });
            yield conn.manager.save(superHero);
            res.json({ message: "Successfully Saved." });
        }))
            .catch((error) => {
            // console.error("Error ", error);
            res.json(error);
        });
    }
    updateSuperHero(req, res) {
        connection_1.connection
            .then((conn) => __awaiter(this, void 0, void 0, function* () {
            const superHero = yield conn.manager.findOne(User_1.default, req.params.superHeroId);
            const requestSuperHero = req.body;
            const requestPower = requestSuperHero.power;
            superHero.firstName = requestSuperHero.name;
            superHero.lastName = "";
            // delete previous power of our super-hero
            // add new power to our super-hero
            requestPower.forEach((reqPower) => {
                const power = new User_1.default();
                power.firstName = reqPower;
            });
            yield conn.manager.save(superHero);
            res.json({ message: "Successfully Updated." });
        }))
            .catch((error) => {
            // console.error("Error ", error);
            res.json(error);
        });
    }
    getSuperHeroById(req, res) {
        connection_1.connection
            .then((conn) => __awaiter(this, void 0, void 0, function* () {
            const superHero = yield conn.manager.findOne(User_1.default, req.params.superHeroId);
            res.json(superHero);
        }))
            .catch((error) => {
            // console.error("Error ", error);
            res.json(error);
        });
    }
    deleteSuperHero(req, res) {
        connection_1.connection
            .then((conn) => __awaiter(this, void 0, void 0, function* () {
            const superHero = yield conn.manager.findOne(User_1.default, req.params.superHeroId);
            // delete all power first
            // delete our super-hero
            // await connection.manager.remove(SuperHero, {id: req.params.superHeroId});
            res.json({ message: "Successfully Removed." });
        }))
            .catch((error) => {
            // console.error("Error ", error);
            res.json(error);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map