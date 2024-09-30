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
exports.handleProfileRequest = exports.handleSignupRequset = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const handleSignupRequset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.signup(req.body);
        res.status(result.status).json(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.handleSignupRequset = handleSignupRequset;
const handleProfileRequest = (req, res) => {
    const result = {
        err: false,
        // @ts-ignore
        data: userService_1.default.getUserById(req.user.id),
        status: 200,
    };
    res.json(result);
};
exports.handleProfileRequest = handleProfileRequest;
