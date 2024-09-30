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
const data_1 = require("../data/data");
const user_1 = __importDefault(require("../types/models/user"));
class UserService {
    static signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = user;
                if (!username || !password) {
                    return {
                        err: true,
                        status: 400,
                        message: "Missing mandatory data, username or password",
                    };
                }
                const newUser = new user_1.default(username);
                yield newUser.hashPassword(password);
                data_1.users.push(newUser);
                return {
                    err: false,
                    message: "User signed up successfully",
                    status: 201,
                    data: { id: newUser.id },
                };
            }
            catch (err) {
                return {
                    err: true,
                    status: 500,
                    data: err,
                };
            }
        });
    }
    static getAllUsers() {
        return data_1.users;
    }
    static getUserById(id) {
        return data_1.users.find((u) => u.id === id);
    }
}
exports.default = UserService;
