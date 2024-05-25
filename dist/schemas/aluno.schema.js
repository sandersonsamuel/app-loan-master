"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.alunoSchema = zod_1.default.object({
    nome: zod_1.default.string({
        invalid_type_error: 'nome invalido',
        required_error: 'nome obrigatorio',
    }),
    email: zod_1.default.string({
        invalid_type_error: 'email invalido',
        required_error: 'email obrigatorio',
    }).email({
        message: 'email invalido',
    }),
    cpf: zod_1.default.string({
        invalid_type_error: 'cpf invalido',
        required_error: 'cpf obrigatorio',
    }).length(11, {
        message: 'cpf invalido',
    })
});
