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
const user_repository_1 = require("../repository/user.repository");
class UserController {
    getAllCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_repository_1.userRepository.getAllCustomers(req, res);
        });
    }
    addCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_repository_1.userRepository.addCustomer(req, res);
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_repository_1.userRepository.updateCustomer(req, res);
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json('Get Customer By Id');
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ message: 'Successfully Removed.' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map