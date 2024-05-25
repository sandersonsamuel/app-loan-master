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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = void 0;
const client_1 = require("@prisma/client");
const jwtAuth_1 = require("./jwtAuth");
const prisma = new client_1.PrismaClient();
const userAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    });
    if (!user) {
        return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }
    (0, jwtAuth_1.jwtAuth)(req, res, user);
});
exports.userAuth = userAuth;
//# sourceMappingURL=userAuth.js.map