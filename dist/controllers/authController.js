"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = require("../routes/authRoute");
const router = (0, express_1.Router)();
router.post("/signin", authRoute_1.handleSigninRequset);
router.delete("/signout", () => { });
exports.default = router;
