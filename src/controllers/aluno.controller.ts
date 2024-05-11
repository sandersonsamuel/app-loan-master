import { Request, Response } from "express";
import {Aluno} from "../interfaces";
import {createAlunoModel, deleteAlunoModel, getAlunosModel, updateAlunoModel} from "../models/aluno.model";

export const getAlunosController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const alunos = await getAlunosModel();
        res.status(200).json(alunos);
    }catch (error) {
        res.status(500).json({message: error})
    }
}

export const createAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {nome, email, cpf} = req.body;
        const newAluno : Aluno = await createAlunoModel({nome, email, cpf});
        res.status(201).json(newAluno);
    }catch (error) {
        res.status(500).json({message: error})
    }
}

export const updateAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {nome, email, cpf} = req.body;
        const id : number = Number(req.params.id);
        const updatedAluno : Aluno = await updateAlunoModel({id, nome, email, cpf});
        res.status(200).json(updatedAluno);

    }catch (error) {
        res.status(500).json({message: error})
    }
}

export const deleteAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { id} = req.params;
        const deletedAluno : Aluno = await deleteAlunoModel(Number(id));
        res.status(200).json(deletedAluno);
    }catch (error) {
        res.status(500).json({message: error})
    }
}