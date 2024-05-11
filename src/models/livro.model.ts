import { PrismaClient } from '@prisma/client'
import {Livro} from "../interfaces";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getLivrosModel = async () : Promise<Livro[]> => {
    return await prisma.livro.findMany();
}

export const createLivroModel = async (livro: Livro) : Promise<Livro> => {
    return await prisma.livro.create({ data: livro });
}

export const updateLivroModel = async (req:Request, livro: Livro) : Promise<Livro> => {
    const id : number = Number(req.params.id)
    return await prisma.livro.update({ where: { id: id }, data: livro });
}

export const deleteLivroModel = async (req:Request) : Promise<Livro> => {
    const id:number = Number(req.params.id)
    return await prisma.livro.delete({ where: { id: id } });
}