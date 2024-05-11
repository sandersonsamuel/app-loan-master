import {PrismaClient} from "@prisma/client";
import {Emprestimo} from "../interfaces";
import {Request, Response} from "express";

const prisma = new PrismaClient();

export const getEmprestimosModel = async () :Promise<Emprestimo[]> => {
    return await prisma.emprestimo.findMany();
}

export const createEmprestimoModel = async (emprestimo: Emprestimo) : Promise<Emprestimo> => {
    return await prisma.emprestimo.create({ data: emprestimo });
}

export const updateEmprestimoModel = async (req:Request, emprestimo: Emprestimo) : Promise<Emprestimo> => {
    const id : number = Number(req.params.id)
    return await prisma.emprestimo.update({ where: { id: id }, data: emprestimo });
}

export const deleteEmprestimoModel = async (req:Request) : Promise<Emprestimo> => {
    const id:number = Number(req.params.id)
    return await prisma.emprestimo.delete({ where: { id: id } });
}