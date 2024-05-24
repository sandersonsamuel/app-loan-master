import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET

if (!secret) {
    throw new Error("JWT_SECRET is not defined");
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers['x-access-token'] as string | undefined;

    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ auth: false, message: 'Failed to authenticate.' });
        }

        req.body.userId = decoded.id;

        next();
    });

}