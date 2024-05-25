"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}
const jwtAuth = (req, res, user) => {
    const token = (0, jsonwebtoken_1.sign)({
        id: user.id,
        username: user.username
    }, secret, { expiresIn: "1d" });
    return res.json({ token });
};
exports.jwtAuth = jwtAuth;
