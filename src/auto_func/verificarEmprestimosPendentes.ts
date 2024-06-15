import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const verificarEmprestimosPendentes = async (): Promise<void> => {
    try {
        const result = await prisma.emprestimo.updateMany({
            where: {
                status: "emprestado",
                data_devolucao: {
                    lt: new Date(),
                }
            },
            data: {
                status: "pendente"
            }
        });

        console.log(`Atualizado ${result.count} empréstimos para status pendente`);
    } catch (error) {
        console.error("Erro ao atualizar empréstimos:", error);
    } finally {
        await prisma.$disconnect();
    }
};
