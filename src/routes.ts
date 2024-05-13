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
import {
    createEmprestimoController, deleteEmprestimoController,
    getEmprestimosController, renewEmprestimoController, returnEmprestimoController,
    updateEmprestimoController
} from "./controllers/emprestimo.controller";
import {validateEmprestimo} from "./middlewares/emprestimos.middleware";

export const router : Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Api biblioteca Azevedo");
})

//Rotas dos alunos
router.get("/alunos", getAlunosController)
router.post("/aluno", validateAluno, validateCpf, createAlunoController)
router.put("/aluno/:id", validateAluno, validateCpf, updateAlunoController)
router.delete("/aluno/:id", deleteAlunoController)

//Rotas dos livros
router.get("/livros", getLivrosController)
router.post("/livro", validateLivro, createLivroController)
router.put("/livro/:id", validateLivro, updateLivroController)
router.delete("/livro/:id", deleteLivroController)

//Rotas dos emprestimos
router.get("/emprestimos", getEmprestimosController)
router.post("/emprestimo", validateEmprestimo, createEmprestimoController)
router.put("/emprestimo/:id", validateEmprestimo, updateEmprestimoController)
router.delete("/emprestimo/:id", deleteEmprestimoController)
router.put("/emprestimo/renovar/:id", renewEmprestimoController)
router.put("/emprestimo/devolver/:id", returnEmprestimoController)

