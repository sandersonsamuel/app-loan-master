import {emprestimoSchema} from "../schemas/emprestimos.schema";
import { Response, Request, NextFunction } from "express";
import {Emprestimo} from "../interfaces";

export const validateEmprestimo = (req: Request, res: Response, next: NextFunction) => {
    try {
        const emprestimo : Emprestimo = req.body

        const validation  = emprestimoSchema.parse(emprestimo)
        next()
    }catch (error) {
        res.status(400).send(error)
    }
}