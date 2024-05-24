import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET

if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}

export const validateJwt = (req: Request, res: Response) => {

    const { token } = req.body

    verify(token, secret, (err: any, decoded: any) => {

        if (err) {
            return res.status(401).json({ auth: false, message: 'Failed to authenticate.' });
        }

        return res.status(200).json({ auth: true, message: 'Authenticated.' });
    });

}