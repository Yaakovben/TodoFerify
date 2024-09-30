"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = require("../routes/userRoute");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const router = (0, express_1.Router)();
router.post("/signup", userRoute_1.handleSignupRequset);
router.get("/profile", verifyUser_1.default, userRoute_1.handleProfileRequest);
exports.default = router;
