"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const z = require("zod");
exports.userSchema = z.object({
    username: z.string({
        required_error: 'username obrigatorio',
        invalid_type_error: 'username deve ser uma string'
    }),
    password: z.string({
        required_error: 'password obrigatorio',
        invalid_type_error: 'password deve ser uma string'
    })
});
//# sourceMappingURL=user.schema.js.map