<h2>API DE GERENCIAMENTO DE EMPRÉSTIMOS DE LIVROS</h2>

<h4>Passos:</h4>

<ol> 
    <li>Ter o <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">yarn</a> instalado</li>
    <li>Rodar o comando <code>yarn install</code> para instalar as dependencias</li>
    <li>Configurar corretamente o .env de acordo com o .env.exemple</li>
    <li>Rodar o comando <code>prisma migrate dev --name init</code> para migrar as tabelas pro banco</li>
    <li>Rodar o comando <code>yarn dev</code> para iniciar a aplicação</li>
    <li>Api roda na porta 3000</li>
    <li>Rotas de acesso no arquivo routes.ts, na pasta src</li>
</ol>

<h4>Tecnologias:</h4>

<ul>
    <li>Prisma</li>
    <li>Express</li>
    <li>zod</li>
    <li>node-cron</li>
</ul>

<p>* aplicação feita sob banco do tipo postgresql</p>
