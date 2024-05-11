import zod from 'zod'

export const alunoSchema = zod.object({
    nome: zod.string({
        invalid_type_error: 'nome invalido',
        required_error: 'nome obrigatorio',
    }),
    email: zod.string({
        invalid_type_error: 'email invalido',
        required_error: 'email obrigatorio',
    }).email({
        message: 'email invalido',
    }),
    cpf: zod.string({
        invalid_type_error: 'cpf invalido',
        required_error: 'cpf obrigatorio',
    }).length(11, {
        message: 'cpf invalido',
    })
})
