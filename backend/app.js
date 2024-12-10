import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware";

export const app = express();

app.use(cors());
app.use(cookieParser());

// app.use(express.urlencoded());
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

// add all middlewares above this
app.use(errorMiddleware);
