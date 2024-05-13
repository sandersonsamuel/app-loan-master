import {createLivroModel, deleteLivroModel, getLivrosModel, updateLivroModel} from "../models/livro.model";
import { Request, Response } from "express";
import {Livro} from "../interfaces";

export const getLivrosController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const livros : Livro[] = await getLivrosModel()
        res.status(200).send(livros)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const createLivroController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const livro : Livro = req.body
        const novoLivro : Livro = await createLivroModel(livro)
        res.status(201).send(novoLivro)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const updateLivroController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const livro : Livro = req.body
        const id : number = Number(req.params.id)
        const novoLivro : Livro = await updateLivroModel(id, livro)
        res.status(201).send(novoLivro)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const deleteLivroController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const id : number = Number(req.params.id)
        const deletedLivro: Livro = await deleteLivroModel(id);
        res.status(201).send(deletedLivro)
    }catch (error) {
        res.status(400).send(error)
    }
}