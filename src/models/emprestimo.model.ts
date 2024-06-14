import {PrismaClient} from "@prisma/client";
import {Emprestimo} from "../interfaces";

const prisma = new PrismaClient();

export const getEmprestimosModel = async () :Promise<Emprestimo[]> => {
    return prisma.emprestimo.findMany({
        include: {
            aluno: true,
            livro: true
        }
    });
}

export const createEmprestimoModel = async (emprestimo: Emprestimo) : Promise<Emprestimo> => {
    return prisma.emprestimo.create({data: emprestimo});
}

export const updateEmprestimoModel = async (id:number, emprestimo: Emprestimo) : Promise<Emprestimo> => {
    return prisma.emprestimo.update({where: {id: id}, data: emprestimo});
}

export const deleteEmprestimoModel = async (id:number) : Promise<Emprestimo> => {
    return prisma.emprestimo.delete({where: {id: id}});
}

export const renewEmprestimoModel = async (id:number, data_devolucao: Date) : Promise<Emprestimo> => {
    return prisma.emprestimo.update({where: {id: id},
        data: {
            renovacoes: {increment: 1},
            data_devolucao: data_devolucao,
            data_emprestimo: new Date(),
            status: "emprestado"
        }
    });
}

export const returnEmprestimoModel = async (id:number) : Promise<Emprestimo> => {
    return prisma.emprestimo.update({where: {id: id}, data: {status: "devolvido"}});
}