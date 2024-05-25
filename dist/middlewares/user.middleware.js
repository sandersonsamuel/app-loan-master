"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const user_schema_1 = require("../schemas/user.schema");
const validateUser = (req, res, next) => {
    try {
        const user = req.body;
        const validation = user_schema_1.userSchema.parse(user);
        next();
    }
    catch (error) {
        res.status(400).send({ error });
    }
};
exports.validateUser = validateUser;
