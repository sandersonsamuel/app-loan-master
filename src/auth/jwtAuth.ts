import {User} from "../interfaces";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const secret  = process.env.JWT_SECRET

if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}

export const jwtAuth = (req: Request, res: Response, user: User) => {
    const token = sign({
        id: user.id,
        username: user.username
    }, secret,
        { expiresIn: "1d" });
        return res.json({token});
}