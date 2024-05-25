"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCpf = exports.validateAluno = void 0;
const aluno_schema_1 = require("../schemas/aluno.schema");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const validateAluno = (req, res, next) => {
    try {
        const validation = aluno_schema_1.alunoSchema.parse(req.body);
        next();
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
};
exports.validateAluno = validateAluno;
const validateCpf = (req, res, next) => {
    if (cpf_cnpj_validator_1.cpf.isValid(req.body.cpf)) {
        next();
    }
    else {
        res.status(400).json({ message: "Cpf inválido" });
    }
};
exports.validateCpf = validateCpf;
