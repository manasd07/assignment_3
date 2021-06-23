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
const passport_1 = require("passport");
const passport_jwt_1 = require("passport-jwt");
const User_1 = require("../entity/User");
const secrets_1 = require("../utils/secrets");
const typeorm_1 = require("typeorm");
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
const entityManager = typeorm_1.getManager();
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secrets_1.JWT_SECRET,
}, function (jwtToken, done) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield entityManager.findOne(User_1.User, { email: jwtToken.email });
            if (!user) {
                return done(undefined, false);
            }
            return done(undefined, user, jwtToken);
        }
        catch (error) {
            return done(error, false);
        }
    });
}));
//# sourceMappingURL=passportHandler.js.map