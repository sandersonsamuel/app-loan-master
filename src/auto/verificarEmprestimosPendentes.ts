const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const verificarEmprestimosPendentes = async (): Promise<void> => {

    await prisma.emprestimo.updateMany({
        where: {
            status: "emprestado",
            data_devolucao: {
                gt: new Date(),
            }
        },
        data: {
            status: "pendente"
        }
    });
}