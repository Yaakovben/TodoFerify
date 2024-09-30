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
exports.todos = exports.users = void 0;
const todo_1 = __importDefault(require("../types/models/todo"));
const user_1 = __importDefault(require("../types/models/user"));
exports.users = [];
exports.todos = [];
// Immidiatly Invoked Function Expression
(() => __awaiter(void 0, void 0, void 0, function* () {
    const johnny = new user_1.default("Johnny");
    yield johnny.hashPassword("1234");
    const laundry = new todo_1.default("Fold some clean laundry", johnny.id);
    const dished = new todo_1.default("Make the dishes from Shabbat dinner", johnny.id);
    exports.users.push(johnny);
    exports.todos.push(laundry, dished);
}))();
