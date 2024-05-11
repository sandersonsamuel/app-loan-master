import * as z from 'zod';

export const emprestimoSchema = z.object({
    data_emprestimo: z.date({
        required_error: 'Data de emprestimo obrigatorio',
        invalid_type_error: 'Data de emprestimo deve ser uma string'
    }),
    data_devolucao: z.date({
        required_error: 'Data de devolução obrigatorio',
        invalid_type_error: 'Data de devolução deve ser uma string'
    }),
    status: z.string({
        required_error: 'Status obrigatorio',
        invalid_type_error: 'Status deve ser uma string'
    }),
    renovacoes: z.number({
        required_error: 'Renovacoes obrigatorio',
        invalid_type_error: 'Renovacoes deve ser um numero'
    }),
    id_aluno: z.number({
        required_error: 'id do aluno obrigatorio',
        invalid_type_error: 'id do aluno deve ser um numero'
    }),
    id_livro: z.number({
        required_error: 'id do livro obrigatorio',
        invalid_type_error: 'id do livro deve ser um numero'
    })
})