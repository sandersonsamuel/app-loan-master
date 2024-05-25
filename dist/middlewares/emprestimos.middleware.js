"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmprestimo = void 0;
const emprestimos_schema_1 = require("../schemas/emprestimos.schema");
const validateEmprestimo = (req, res, next) => {
    try {
        const emprestimo = req.body;
        const validation = emprestimos_schema_1.emprestimoSchema.parse(emprestimo);
        next();
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.validateEmprestimo = validateEmprestimo;
//# sourceMappingURL=emprestimos.middleware.js.map