"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
//importacoes de aluno
const aluno_controller_1 = require("./controllers/aluno.controller");
const aluno_middleware_1 = require("./middlewares/aluno.middleware");
//importações de livro
const livro_controller_1 = require("./controllers/livro.controller");
const livro_middleware_1 = require("./middlewares/livro.middleware");
//importações de empréstimo
const emprestimo_controller_1 = require("./controllers/emprestimo.controller");
const emprestimos_middleware_1 = require("./middlewares/emprestimos.middleware");
//importacao de autenticacao
const userAuth_1 = require("./auth/userAuth");
const user_middleware_1 = require("./middlewares/user.middleware");
const verifyJwt_1 = require("./auth/verifyJwt");
const validateJwt_1 = require("./auth/validateJwt");
exports.router = express_1.default.Router();
exports.router.get("/", (req, res) => {
    res.send("Api biblioteca Azevedo");
});
exports.router.post("/jwt/verify", validateJwt_1.validateJwt);
exports.router.post('/login', user_middleware_1.validateUser, userAuth_1.userAuth);
//Rotas dos alunos
exports.router.get("/alunos", verifyJwt_1.verifyJwt, aluno_controller_1.getAlunosController);
exports.router.post("/aluno", verifyJwt_1.verifyJwt, aluno_middleware_1.validateAluno, aluno_middleware_1.validateCpf, aluno_controller_1.createAlunoController);
exports.router.put("/aluno/:id", verifyJwt_1.verifyJwt, aluno_middleware_1.validateAluno, aluno_middleware_1.validateCpf, aluno_controller_1.updateAlunoController);
exports.router.delete("/aluno/:id", verifyJwt_1.verifyJwt, aluno_controller_1.deleteAlunoController);
//Rotas dos livros
exports.router.get("/livros", verifyJwt_1.verifyJwt, livro_controller_1.getLivrosController);
exports.router.post("/livro", verifyJwt_1.verifyJwt, livro_middleware_1.validateLivro, livro_controller_1.createLivroController);
exports.router.put("/livro/:id", verifyJwt_1.verifyJwt, livro_middleware_1.validateLivro, livro_controller_1.updateLivroController);
exports.router.delete("/livro/:id", verifyJwt_1.verifyJwt, livro_controller_1.deleteLivroController);
//Rotas dos emprestimos
exports.router.get("/emprestimos", verifyJwt_1.verifyJwt, emprestimo_controller_1.getEmprestimosController);
exports.router.post("/emprestimo", verifyJwt_1.verifyJwt, emprestimos_middleware_1.validateEmprestimo, emprestimo_controller_1.createEmprestimoController);
exports.router.put("/emprestimo/:id", verifyJwt_1.verifyJwt, emprestimos_middleware_1.validateEmprestimo, emprestimo_controller_1.updateEmprestimoController);
exports.router.delete("/emprestimo/:id", verifyJwt_1.verifyJwt, emprestimo_controller_1.deleteEmprestimoController);
exports.router.put("/emprestimo/renovar/:id", verifyJwt_1.verifyJwt, emprestimo_controller_1.renewEmprestimoController);
exports.router.put("/emprestimo/devolver/:id", verifyJwt_1.verifyJwt, emprestimo_controller_1.returnEmprestimoController);
//# sourceMappingURL=routes.js.map