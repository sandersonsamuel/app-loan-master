"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}
const verifyJwt = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    (0, jsonwebtoken_1.verify)(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ auth: false, message: 'Failed to authenticate.' });
        }
        req.body.userId = decoded.id;
        next();
    });
};
exports.verifyJwt = verifyJwt;
