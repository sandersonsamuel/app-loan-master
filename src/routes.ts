import express from "express";
import {Request, Response, Router} from "express";

//importacoes de aluno

import {
    createAlunoController,
    deleteAlunoController,
    getAlunosController,
    updateAlunoController
} from "./controllers/aluno.controller";

import {validateAluno, validateCpf} from "./middlewares/aluno.middleware";

//importações de livro

import {
    createLivroController,
    deleteLivroController,
    getLivrosController,
    updateLivroController
} from "./controllers/livro.controller";

import {validateLivro} from "./middlewares/livro.middleware";

//importações de empréstimo

import {
    createEmprestimoController, deleteEmprestimoController,
    getEmprestimosController, renewEmprestimoController, returnEmprestimoController,
    updateEmprestimoController
} from "./controllers/emprestimo.controller";
import {validateEmprestimo} from "./middlewares/emprestimos.middleware";

//importacao de autenticacao
import {userAuth} from "./auth/userAuth";
import {validateUser} from "./middlewares/user.middleware";
import {verifyJwt} from "./auth/verifyJwt";
import {validateJwt} from "./auth/validateJwt";

export const router : Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Api biblioteca Azevedo");
})

router.post("/jwt/verify", validateJwt)

router.post('/login', validateUser, userAuth)

//Rotas dos alunos
router.get("/alunos", verifyJwt, getAlunosController)
router.post("/aluno", verifyJwt, validateAluno, validateCpf, createAlunoController)
router.put("/aluno/:id", verifyJwt, validateAluno, validateCpf, updateAlunoController)
router.delete("/aluno/:id", verifyJwt, deleteAlunoController)

//Rotas dos livros
router.get("/livros", verifyJwt, getLivrosController)
router.post("/livro", verifyJwt, validateLivro, createLivroController)
router.put("/livro/:id", verifyJwt, validateLivro, updateLivroController)
router.delete("/livro/:id", verifyJwt, deleteLivroController)

//Rotas dos emprestimos
router.get("/emprestimos", verifyJwt, getEmprestimosController)
router.post("/emprestimo", verifyJwt, validateEmprestimo, createEmprestimoController)
router.put("/emprestimo/:id", verifyJwt, validateEmprestimo, updateEmprestimoController)
router.delete("/emprestimo/:id", verifyJwt, deleteEmprestimoController)
router.put("/emprestimo/renovar/:id", verifyJwt, renewEmprestimoController)
router.put("/emprestimo/devolver/:id", verifyJwt, returnEmprestimoController)

