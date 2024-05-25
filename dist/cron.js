"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = require("node-cron");
const verificarEmprestimosPendentes_1 = require("./auto/verificarEmprestimosPendentes");
const job = (0, node_cron_1.schedule)('0 0 * * *', () => {
    (0, verificarEmprestimosPendentes_1.verificarEmprestimosPendentes)();
});
job.start();
//# sourceMappingURL=cron.js.map