"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLivro = void 0;
const livro_schema_1 = require("../schemas/livro.schema");
const validateLivro = (req, res, next) => {
    try {
        const livro = req.body;
        const validation = livro_schema_1.livroSchema.parse(livro);
        next();
    }
    catch (error) {
        res.status(400).send({ error });
    }
};
exports.validateLivro = validateLivro;
//# sourceMappingURL=livro.middleware.js.map