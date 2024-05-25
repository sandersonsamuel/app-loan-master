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
exports.deleteAlunoModel = exports.updateAlunoModel = exports.createAlunoModel = exports.getAlunosModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAlunosModel = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.aluno.findMany();
});
exports.getAlunosModel = getAlunosModel;
const createAlunoModel = (aluno) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.aluno.create({ data: aluno });
});
exports.createAlunoModel = createAlunoModel;
const updateAlunoModel = (id, aluno) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.aluno.update({ data: aluno, where: { id: id } });
});
exports.updateAlunoModel = updateAlunoModel;
const deleteAlunoModel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.emprestimo.deleteMany({ where: { id_aluno: id } });
    return prisma.aluno.delete({ where: { id: id } });
});
exports.deleteAlunoModel = deleteAlunoModel;
