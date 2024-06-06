import {userSchema} from "../schemas/user.schema";
import { Response, Request, NextFunction } from "express";
import {User} from "../interfaces";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = req.body
        userSchema.parse(user)
        next()
    }catch (error) {
        res.status(400).send({error})
    }
}