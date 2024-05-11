import {Emprestimo} from "../interfaces";
import {
    createEmprestimoModel,
    deleteEmprestimoModel,
    getEmprestimosModel,
    updateEmprestimoModel
} from "../models/emprestimo.model";
import { Request, Response } from "express";

export const getEmprestimosController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const emprestimos : Emprestimo[] = await getEmprestimosModel();
        res.status(200).send(emprestimos)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const createEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const emprestimo: Emprestimo = req.body
        const emprestimoCriado : Emprestimo = await createEmprestimoModel(emprestimo);
        res.status(200).send(emprestimoCriado)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const updateEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const emprestimo: Emprestimo = req.body
        const emprestimoAtualizado : Emprestimo = await updateEmprestimoModel(req, emprestimo);
        res.status(200).send(emprestimoAtualizado)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const deleteEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const emprestimo : Emprestimo = await deleteEmprestimoModel(req);
        res.status(200).send(emprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}