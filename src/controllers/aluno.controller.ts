import { Request, Response } from "express";
import {Aluno} from "../interfaces";
import { Resend } from "resend";
import {createAlunoModel, deleteAlunoModel, getAlunosModel, updateAlunoModel} from "../models/aluno.model";

export const getAlunosController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const alunos : Aluno[] = await getAlunosModel();
        res.status(200).json(alunos);
    }catch (error) {
        res.status(400).json({message: error})
    }
}

export const createAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {nome, email, cpf} = req.body;
        const newAluno : Aluno = await createAlunoModel({nome, email, cpf});
        const resend : Resend = new Resend(process.env.API_KEY_RESEND);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Bem-vindo à Biblioteca Azevedo!',
            html: '<h1>Bem-vindo à Biblioteca Azevedo!</h1>' +
                `    <p>Olá ${nome},</p>` +
                '    <p>Seu cadastro foi realizado com sucesso. Agora você pode aproveitar todos os benefícios da nossa biblioteca.</p>' +
                '    <p>Estamos ansiosos para ajudá-lo a descobrir novos livros e conhecimentos.</p>' +
                '    <p>Atenciosamente,<br>A equipe da Biblioteca Azevedo</p>'
        })

        res.status(201).json(newAluno);
    }catch (error) {
        res.status(400).json({message: error})
    }
}

export const updateAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const aluno : Aluno = req.body;
        const id : number = Number(req.params.id);
        const updatedAluno : Aluno = await updateAlunoModel(id, aluno);
        res.status(200).json(updatedAluno);

    }catch (error) {
        res.status(400).json({message: error})
    }
}

export const deleteAlunoController = async (req: Request, res: Response) : Promise<void> => {
    try {
        const id : number = Number(req.params.id);
        const deletedAluno : Aluno = await deleteAlunoModel(id);
        res.status(200).json(deletedAluno);
    }catch (error) {
        res.status(400).json({message: error})
    }
}