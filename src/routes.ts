import express from "express";
import {Request, Response, Router} from "express";

import {
    createAlunoController,
    deleteAlunoController,
    getAlunosController,
    updateAlunoController
} from "./controllers/aluno.controller";

import {validateAluno, validateCpf} from "./middlewares/aluno.middleware";

import {
    createLivroController,
    deleteLivroController,
    getLivrosController,
    updateLivroController
} from "./controllers/livro.controller";

import {validateLivro} from "./middlewares/livro.middleware";

export const router : Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Api biblioteca Azevedo");
})

//Rotas do aluno
router.get("/alunos", getAlunosController)
router.post("/aluno", validateAluno, validateCpf, createAlunoController)
router.put("/aluno/:id", validateAluno, validateCpf, updateAlunoController)
router.delete("/aluno/:id", deleteAlunoController)

//Rotas dos livros
router.get("/livros", getLivrosController)
router.post("/livro", validateLivro, createLivroController)
router.put("/livro/:id", validateLivro, updateLivroController)
router.delete("/livro/:id", deleteLivroController)
