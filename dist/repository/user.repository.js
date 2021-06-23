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
exports.userRepository = void 0;
const User_1 = require("../entity/User");
const connection_1 = require("../connection/connection");
const user_validator_helper_1 = require("../utils/helpers/user-validator.helper");
let userRepo;
connection_1.default.then((conn) => {
    userRepo = conn.getRepository(User_1.User);
});
exports.userRepository = {
    getAllCustomers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userRepo.find();
        return res.json({ message: 'Successfull', data: users });
    }),
    addCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = req.body;
            const userValidation = yield user_validator_helper_1.validateUserRegistration(user);
            if (userValidation.error) {
                return res.json({ message: 'Failed', error: userValidation.error.details });
            }
            else {
                const { firstName, lastName, email, password } = req.body;
                const newUser = new User_1.User();
                newUser.firstName = firstName;
                newUser.lastName = lastName;
                newUser.email = email;
                newUser.password = password;
                yield userRepo.save(newUser);
                return res.json({ message: 'Success', data: newUser });
            }
        }
        catch (error) {
            return res.json({ message: 'Failed', error: error });
        }
    }),
    updateCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        return res.json({ message: 'Update customer API' });
    }),
    getCustomerById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        return res.json({ message: 'Get Customer By Id API' });
    }),
    deleteCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        return res.json({ message: 'Delete Customer API' });
    }),
};
//# sourceMappingURL=user.repository.js.map