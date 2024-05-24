import {Emprestimo} from "../interfaces";
import {
    createEmprestimoModel,
    deleteEmprestimoModel,
    getEmprestimosModel, renewEmprestimoModel, returnEmprestimoModel,
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
        const id : number = Number(req.params.id)
        const emprestimoAtualizado : Emprestimo = await updateEmprestimoModel(id, emprestimo);
        res.status(200).send(emprestimoAtualizado)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const deleteEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const id : number = Number(req.params.id)
        const emprestimo : Emprestimo = await deleteEmprestimoModel(id);
        res.status(200).send(emprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const renewEmprestimoController = async (req:Request, res: Response) : Promise<void> => {
    try{
        const { data_devolucao } = req.body
        const id : number = Number(req.params.id)
        const renewEmprestimo : Emprestimo = await renewEmprestimoModel(id, data_devolucao)
        res.status(200).send(renewEmprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const returnEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try{
        const id : number = Number(req.params.id)
        const returnEmprestimo : Emprestimo = await returnEmprestimoModel(id)
        res.status(200).send(returnEmprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}