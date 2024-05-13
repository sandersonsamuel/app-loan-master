import { schedule } from "node-cron";
import { ScheduledTask } from "node-cron";
import { verificarEmprestimosPendentes } from './auto/verificarEmprestimosPendentes';

const job : ScheduledTask = schedule('0 0 * * *', () => {
    verificarEmprestimosPendentes()
})

job.start();