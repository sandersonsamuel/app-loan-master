import express from 'express';
import cors from 'cors';
import {router} from "./routes";

export const app = express();

app.use(cors({
    origin: 'https://biblioteca-azevedo-site.vercel.app/',
}));
app.use(express.json());
app.use(router)