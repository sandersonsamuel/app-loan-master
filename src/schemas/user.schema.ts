import * as z from 'zod'

export const userSchema = z.object({
    username: z.string({
        required_error: 'username obrigatorio',
        invalid_type_error: 'username deve ser uma string'
    }),
    password: z.string({
        required_error: 'password obrigatorio',
        invalid_type_error: 'password deve ser uma string'
    })
})