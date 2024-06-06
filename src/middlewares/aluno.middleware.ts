import { Request, NextFunction, Response } from "express";
import { alunoSchema } from "../schemas/aluno.schema";
import {Aluno} from "../interfaces";
import {cpf} from "cpf-cnpj-validator";

export const validateAluno = (req: Request, res: Response, next: NextFunction) => {
    try {
        alunoSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({message: error});
    }
};

export const validateCpf = (req: Request, res: Response, next: NextFunction) => {
    if (cpf.isValid(req.body.cpf)) {
        next();
    } else {
        res.status(400).json({message: "Cpf inválido"});
    }
}
