import express from "express";

import { usersRoutes } from "./routes/users.routes";

import swaggerUi from 'swagger-ui-express'
import swagger from './swagger.json'

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.use("/users", usersRoutes);

export { app };
