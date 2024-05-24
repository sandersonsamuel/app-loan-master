import { PrismaClient } from "@prisma/client";
import { Aluno } from "../interfaces";

const prisma : PrismaClient = new PrismaClient();

export const getAlunosModel = async () : Promise<Aluno[]> => {
    return prisma.aluno.findMany();
}

export const createAlunoModel = async (aluno: Aluno) : Promise<Aluno> => {
    return prisma.aluno.create({data: aluno});
}

export const updateAlunoModel = async (id: number, aluno: Aluno) : Promise<Aluno> => {
    return prisma.aluno.update({data: aluno, where: {id: id}});
}

export const deleteAlunoModel = async (id: number) : Promise<Aluno> => {
    await prisma.emprestimo.deleteMany({where: {id_aluno: id}})
    return prisma.aluno.delete({where: {id: id}})
}