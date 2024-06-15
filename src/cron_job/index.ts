import { schedule } from 'node-cron';
import {verificarEmprestimosPendentes} from "../auto_func/verificarEmprestimosPendentes";

//verificando se tem empréstimos vencidos e atualizando-os para empréstimo pendente, rodando a cada minuto na cron-job
schedule('* * * * *', async () => {
    await verificarEmprestimosPendentes()
})