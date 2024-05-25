"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroSchema = void 0;
const z = require("zod");
const now = new Date();
const atualYear = now.getFullYear();
exports.livroSchema = z.object({
    isbn: z.string({
        required_error: "ISBN é obrigatório",
        invalid_type_error: "ISBN deve ser uma string"
    }).min(10).max(13),
    titulo: z.string(),
    autor: z.string(),
    editora: z.string(),
    ano: z.number().max(atualYear),
    genero: z.string(),
});
//# sourceMappingURL=livro.schema.js.map