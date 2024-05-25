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
exports.deleteLivroModel = exports.updateLivroModel = exports.createLivroModel = exports.getLivrosModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getLivrosModel = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.livro.findMany();
});
exports.getLivrosModel = getLivrosModel;
const createLivroModel = (livro) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.livro.create({ data: livro });
});
exports.createLivroModel = createLivroModel;
const updateLivroModel = (id, livro) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.livro.update({ where: { id: id }, data: livro });
});
exports.updateLivroModel = updateLivroModel;
const deleteLivroModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.emprestimo.deleteMany({ where: { id_livro: id } });
    return yield prisma.livro.delete({ where: { id: id } });
});
exports.deleteLivroModel = deleteLivroModel;
//# sourceMappingURL=livro.model.js.map