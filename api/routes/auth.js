import express from "express";
import {
  loginUser,
  newUser,
  logoutUser,
} from "../controllers/authController.js";


const authRouter = express.Router();

authRouter.route("/register").post(newUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/logout").get(logoutUser);

export default authRouter;
