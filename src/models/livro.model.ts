import { PrismaClient } from '@prisma/client'
import {Livro} from "../interfaces";

const prisma = new PrismaClient();

export const getLivrosModel = async () : Promise<Livro[]> => {
    return await prisma.livro.findMany();
}

export const createLivroModel = async (livro: Livro) : Promise<Livro> => {
    return await prisma.livro.create({ data: livro });
}

export const updateLivroModel = async (id:number, livro: Livro) : Promise<Livro> => {
    return await prisma.livro.update({ where: { id: id }, data: livro });
}

export const deleteLivroModel = async (id:number) : Promise<Livro> => {
    await prisma.emprestimo.deleteMany({ where: { id_livro: id } });
    return await prisma.livro.delete({ where: { id: id } });
}