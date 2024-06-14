const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Api gerenciadora de emprestimos de livros',
        description: 'API de gerenciamento de empréstimos de livros do azevedo',
    },
    host: 'localhost:4000',
    schemes: ['http'],
};

const outputFile = './src/swagger/swagger.json';
const endpointsFiles = ['./src/routes.ts'];

try {
    swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
        console.log('Documentação Swagger gerada com sucesso');
    }).catch((err: any) => {
        console.error('Erro ao gerar a documentação Swagger:', err);
    });
} catch (err) {
    console.error('Erro inesperado:', err);
}
