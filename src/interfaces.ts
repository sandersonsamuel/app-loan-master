export interface Aluno {
    id?: number
    nome: string
    email: string
    cpf: string
}

export interface Livro {
    id?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano: number
    genero: string
}

export interface Emprestimo {
    id?: number
    data_emprestimo?: Date
    data_devolucao: Date
    renovacoes?: number
    status?: string
    id_aluno: number
    id_livro: number
}