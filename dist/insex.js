"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const authController_1 = __importDefault(require("./controllers/authController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const todoController_1 = __importDefault(require("./controllers/todoController"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // to get the req.body
app.use((0, cookie_parser_1.default)()); // to get the req.cookie(s)
app.use("/auth", authController_1.default);
app.use("/todos", todoController_1.default);
app.use("/users", userController_1.default);
app.listen(process.env.PORT, () => console.log(`Server is up and running, feel free to visit at http://localhost:${process.env.PORT}`));
