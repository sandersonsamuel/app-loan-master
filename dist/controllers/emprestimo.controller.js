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
exports.returnEmprestimoController = exports.renewEmprestimoController = exports.deleteEmprestimoController = exports.updateEmprestimoController = exports.createEmprestimoController = exports.getEmprestimosController = void 0;
const emprestimo_model_1 = require("../models/emprestimo.model");
const getEmprestimosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emprestimos = yield (0, emprestimo_model_1.getEmprestimosModel)();
        res.status(200).send(emprestimos);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getEmprestimosController = getEmprestimosController;
const createEmprestimoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emprestimo = req.body;
        const emprestimoCriado = yield (0, emprestimo_model_1.createEmprestimoModel)(emprestimo);
        res.status(200).send(emprestimoCriado);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createEmprestimoController = createEmprestimoController;
const updateEmprestimoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emprestimo = req.body;
        const id = Number(req.params.id);
        const emprestimoAtualizado = yield (0, emprestimo_model_1.updateEmprestimoModel)(id, emprestimo);
        res.status(200).send(emprestimoAtualizado);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.updateEmprestimoController = updateEmprestimoController;
const deleteEmprestimoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const emprestimo = yield (0, emprestimo_model_1.deleteEmprestimoModel)(id);
        res.status(200).send(emprestimo);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.deleteEmprestimoController = deleteEmprestimoController;
const renewEmprestimoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data_devolucao } = req.body;
        const id = Number(req.params.id);
        const renewEmprestimo = yield (0, emprestimo_model_1.renewEmprestimoModel)(id, data_devolucao);
        res.status(200).send(renewEmprestimo);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.renewEmprestimoController = renewEmprestimoController;
const returnEmprestimoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const returnEmprestimo = yield (0, emprestimo_model_1.returnEmprestimoModel)(id);
        res.status(200).send(returnEmprestimo);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.returnEmprestimoController = returnEmprestimoController;
