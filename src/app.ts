import express, {Express} from 'express';
import cors from 'cors';
import {router} from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../src/swagger/swagger.json'
import './cron_job/index'

export const app : Express = express();

app.use(cors())
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router)