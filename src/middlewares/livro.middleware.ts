import {livroSchema} from "../schemas/livro.schema";
import { Response, Request, NextFunction } from "express";
import {Livro} from "../interfaces";

export const validateLivro = (req: Request, res: Response, next: NextFunction) => {
    try {
        const livro : Livro = req.body
        const validation : Livro = livroSchema.parse(livro)
        next()
    }catch (error) {
        res.status(400).send({error})
    }
}