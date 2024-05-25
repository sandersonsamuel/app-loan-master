"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwt = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}
const validateJwt = (req, res) => {
    const { token } = req.body;
    (0, jsonwebtoken_1.verify)(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ auth: false, message: 'Failed to authenticate.' });
        }
        return res.status(200).json({ auth: true, message: 'Authenticated.' });
    });
};
exports.validateJwt = validateJwt;
