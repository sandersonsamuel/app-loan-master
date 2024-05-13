import {PrismaClient} from "@prisma/client";
import {Emprestimo} from "../interfaces";

const prisma = new PrismaClient();

export const getEmprestimosModel = async () :Promise<Emprestimo[]> => {
    return await prisma.emprestimo.findMany();
}

export const createEmprestimoModel = async (emprestimo: Emprestimo) : Promise<Emprestimo> => {
    return await prisma.emprestimo.create({ data: emprestimo });
}

export const updateEmprestimoModel = async (id:number, emprestimo: Emprestimo) : Promise<Emprestimo> => {
    return await prisma.emprestimo.update({ where: { id: id }, data: emprestimo });
}

export const deleteEmprestimoModel = async (id:number) : Promise<Emprestimo> => {
    return await prisma.emprestimo.delete({ where: { id: id } });
}

export const renewEmprestimoModel = async (id:number, data_devolucao: Date) : Promise<Emprestimo> => {
    return await prisma.emprestimo.update({ where: { id: id }, data: { renovacoes: { increment: 1}, data_devolucao: data_devolucao, data_emprestimo: new Date(), status: "emprestado" } });
}

export const returnEmprestimoModel = async (id:number) : Promise<Emprestimo> => {
    return await prisma.emprestimo.update({ where: { id: id }, data: { status: "devolvido" } });
}