import {Aluno, Emprestimo, Livro} from "../interfaces";
import {
    createEmprestimoModel,
    deleteEmprestimoModel,
    getEmprestimosModel, renewEmprestimoModel, returnEmprestimoModel,
    updateEmprestimoModel
} from "../models/emprestimo.model";
import { PrismaClient } from '@prisma/client'
import {Resend} from "resend";
import moment from "moment";
import { Request, Response } from "express";

const prisma = new PrismaClient();

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

        const aluno : Aluno | null = await prisma.aluno.findUnique({
            where: {
                id: emprestimo.id_aluno
            }
        })

        const livro : Livro | null = await prisma.livro.findUnique({
            where: {
                id: emprestimo.id_livro
            }
        })

        if (livro === null || aluno === null) {
            throw new Error('Aluno ou Livro não encontrado')
        }

        const resend : Resend = new Resend(process.env.API_KEY_RESEND);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: aluno.email,
            subject: 'Emprestimo realizado',
            html: `
                <h1>Confirmação de Empréstimo de Livro</h1>
                <p>Olá ${aluno.nome},</p>
                <p>Você pegou emprestado o livro <strong>${livro.titulo}</strong>.</p>
                <p>Data de Empréstimo: ${moment(emprestimoCriado.data_emprestimo).format('DD/MM/YYYY')}</p>
                <p>Data de Devolução: ${moment(emprestimoCriado.data_devolucao).format('DD/MM/YYYY')}</p>
                <p>Aproveite sua leitura! Não se esqueça de devolver o livro até a data mencionada para evitar multas.</p>
                <p>Atenciosamente,<br>A equipe da Biblioteca Azevedo</p>
        `
        })

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


        const emprestimo = await prisma.emprestimo.findUnique({
            where: {
                id: id
            }
        })

        if (!emprestimo) {
            throw new Error('Emprestimo não encontrado');
        }

        const aluno : Aluno | null = await prisma.aluno.findUnique({
            where: {
                id: emprestimo?.id_aluno
            }
        })

        if (!aluno) {
            throw new Error('Aluno não encontrado');
        }

        const livro : Livro | null = await prisma.livro.findUnique({
            where: {
                id: emprestimo?.id_livro
            }
        })

        if (!livro) {
            throw new Error('Livro não encontrado');
        }

        const resend : Resend = new Resend(process.env.API_KEY_RESEND);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: aluno.email,
            subject: 'Emprestimo renovado',
            html: `
                <h1>Confirmação de Renovação de Empréstimo de Livro</h1>
                <p>Olá ${aluno.nome},</p>
                <p>Foi renovado o empréstimo do livro <strong>${livro.titulo}</strong>.</p>
                <p>Data de Empréstimo: ${moment(emprestimo.data_emprestimo).format('DD/MM/YYYY')}</p>
                <p>Data de Devolução: ${moment(emprestimo.data_devolucao).format('DD/MM/YYYY')}</p>
                <p>Aproveite sua leitura! Não se esqueça de devolver o livro até a data mencionada para evitar multas.</p>
                <p>Atenciosamente,<br>A equipe da Biblioteca Azevedo</p>
            `
        })
        res.status(200).send(renewEmprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}

export const returnEmprestimoController = async (req: Request, res: Response) : Promise<void> => {
    try{
        const id : number = Number(req.params.id)
        const returnEmprestimo : Emprestimo = await returnEmprestimoModel(id)

        if (!returnEmprestimo) {
            throw new Error('Emprestimo não encontrado');
        }

        const aluno : Aluno | null = await prisma.aluno.findUnique({
            where: {
                id: returnEmprestimo?.id_aluno
            }
        })

        if (!aluno) {
            throw new Error('Aluno não encontrado');
        }

        const livro : Livro | null = await prisma.livro.findUnique({
            where: {
                id: returnEmprestimo?.id_livro
            }
        })

        if (!livro) {
            throw new Error('Livro não encontrado');
        }

        const resend : Resend = new Resend(process.env.API_KEY_RESEND);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: aluno.email,
            subject: 'Livro devolvido',
            html: `
                <h1>Confirmação de Devolução de Livro</h1>
                <p>Olá ${aluno.nome},</p>
                <p>O livro <strong>${livro.titulo}</strong> foi devolvido com sucesso.</p>
                <p>Data de Devolução esperada: ${moment(returnEmprestimo.data_devolucao).format('DD/MM/YYYY')}</p>
                <p>Esperamos que tenha tido uma boa leitura do livro!</p>
                <p>Atenciosamente,<br>A equipe da Biblioteca Azevedo</p>
        `
        })

        res.status(200).send(returnEmprestimo)
    }catch (error) {
        res.status(400).send(error)
    }
}