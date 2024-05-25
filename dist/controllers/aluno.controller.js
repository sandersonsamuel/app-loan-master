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
exports.deleteAlunoController = exports.updateAlunoController = exports.createAlunoController = exports.getAlunosController = void 0;
const aluno_model_1 = require("../models/aluno.model");
const getAlunosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alunos = yield (0, aluno_model_1.getAlunosModel)();
        res.status(200).json(alunos);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAlunosController = getAlunosController;
const createAlunoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, email, cpf } = req.body;
        const newAluno = yield (0, aluno_model_1.createAlunoModel)({ nome, email, cpf });
        res.status(201).json(newAluno);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.createAlunoController = createAlunoController;
const updateAlunoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aluno = req.body;
        const id = Number(req.params.id);
        const updatedAluno = yield (0, aluno_model_1.updateAlunoModel)(id, aluno);
        res.status(200).json(updatedAluno);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.updateAlunoController = updateAlunoController;
const deleteAlunoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedAluno = yield (0, aluno_model_1.deleteAlunoModel)(id);
        res.status(200).json(deletedAluno);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.deleteAlunoController = deleteAlunoController;
//# sourceMappingURL=aluno.controller.js.map