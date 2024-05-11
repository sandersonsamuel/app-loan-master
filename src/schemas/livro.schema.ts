import * as z from "zod";
const now: Date = new Date();
const atualYear : number = now.getFullYear();

export const livroSchema = z.object({
    id: z.number().optional(),
    isbn: z.string({
        required_error: "ISBN é obrigatório",
        invalid_type_error: "ISBN deve ser uma string"
    }).min(10).max(13),
    titulo: z.string(),
    autor: z.string(),
    editora: z.string(),
    ano: z.number().max(atualYear),
    genero: z.string(),
})
