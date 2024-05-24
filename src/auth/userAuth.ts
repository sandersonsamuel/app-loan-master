import {NextFunction, Response, Request} from "express";
import { PrismaClient } from "@prisma/client";
import {User} from "../interfaces";
import {jwtAuth} from "./jwtAuth";

const prisma = new PrismaClient();

export const userAuth = async (req: Request, res: Response, next: NextFunction)  => {

    const {username, password} : User = req.body;

    const user  = await prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })

    if (!user){
        return res.status(401).json({message: "Usuário ou senha inválidos"});
    }

    jwtAuth(req, res, user);
}