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
exports.deleteLivroController = exports.updateLivroController = exports.createLivroController = exports.getLivrosController = void 0;
const livro_model_1 = require("../models/livro.model");
const getLivrosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield (0, livro_model_1.getLivrosModel)();
        res.status(200).send(livros);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getLivrosController = getLivrosController;
const createLivroController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livro = req.body;
        const novoLivro = yield (0, livro_model_1.createLivroModel)(livro);
        res.status(201).send(novoLivro);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createLivroController = createLivroController;
const updateLivroController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livro = req.body;
        const id = Number(req.params.id);
        const novoLivro = yield (0, livro_model_1.updateLivroModel)(id, livro);
        res.status(201).send(novoLivro);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.updateLivroController = updateLivroController;
const deleteLivroController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedLivro = yield (0, livro_model_1.deleteLivroModel)(id);
        res.status(201).send(deletedLivro);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.deleteLivroController = deleteLivroController;
