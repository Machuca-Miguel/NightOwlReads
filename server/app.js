import express from "express";
import { json, urlencoded, static as static_} from "express";
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';
import axios from "axios";

import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from 'cors';

import usersRouter from "./routes/users.js";
import booksRouter from "./routes/books.js";
import authRouter from "./routes/auth.js";
import achievementsRouter from "./routes/achievements.js";

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(
    cors({
      origin: "*"
    })
  )

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static_(resolve(__dirname, "public")));

app.use('/api/user', usersRouter);
app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);
app.use('/api/achievements', achievementsRouter);


export default app;