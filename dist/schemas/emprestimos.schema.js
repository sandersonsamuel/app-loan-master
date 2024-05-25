"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emprestimoSchema = void 0;
const z = require("zod");
exports.emprestimoSchema = z.object({
    data_emprestimo: z.date({
        required_error: 'Data de emprestimo obrigatorio',
        invalid_type_error: 'Data de emprestimo deve ser uma data valida'
    }).optional(),
    data_devolucao: z.string({
        required_error: 'Data de devolução obrigatorio',
        invalid_type_error: 'Data de devolução deve ser uma data valida'
    }),
    id_aluno: z.number({
        required_error: 'id do aluno obrigatorio',
        invalid_type_error: 'id do aluno deve ser um numero'
    }),
    id_livro: z.number({
        required_error: 'id do livro obrigatorio',
        invalid_type_error: 'id do livro deve ser um numero'
    })
});
//# sourceMappingURL=emprestimos.schema.js.map