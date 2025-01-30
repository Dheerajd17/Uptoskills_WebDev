import express from "express"
import signUpRouter from "./routes/user.routes.js"

const app = express();

app.use(express.json());

app.use('/api/auth',signUpRouter);

export default app;