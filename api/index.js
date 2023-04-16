import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { config } from "./dbConfig/config.js";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routes/auth.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import movieRouter from "./routes/movies.js";
import listRouter from "./routes/lists.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.js";

dotenv.config();
config();

const app = express();
app.use(bodyParser.json()); // Global middleware
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:4000"] }));
app.use("/api/auth", authRouter);
app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);
app.use("/api/lists", listRouter);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`this is backend at port ${process.env.PORT}`);
});
