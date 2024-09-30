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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_1 = require("../data/data");
class AuthService {
    static signin(userFromReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = userFromReq;
                // validations
                if (!username || !password) {
                    return {
                        err: true,
                        message: "Missing madatory data",
                        status: 400,
                    };
                }
                // try to find the user
                const user = data_1.users.find((u) => u.username === username);
                // return erros if no user/password matching
                if (!user) {
                    return {
                        err: true,
                        message: "User not found",
                        status: 400,
                    };
                }
                if (!(yield user.comparePassword(password))) {
                    return {
                        err: true,
                        message: "Wrong password",
                        status: 401,
                    };
                }
                // create token
                const payload = {
                    id: user.id, username
                };
                const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "10m"
                });
                // return the token to the route
                return {
                    err: false,
                    status: 200,
                    data: {
                        token
                    }
                };
            }
            catch (err) {
                // handle errors
                return {
                    err: true,
                    message: "Missing madatory data",
                    status: 500,
                    data: err
                };
            }
        });
    }
}
exports.default = AuthService;
