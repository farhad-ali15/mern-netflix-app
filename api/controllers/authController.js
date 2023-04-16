import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const newUser = async (req, res, next) => {
  try {
    let myPlaintextPassword = req.body.password;
    let saltRounds = 10;
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

    req.body.password = hash;
    const user = await User.create(req.body);
    if (user) {
      res.json({
        message: "new user has been created",
      });
      console.log(user);
    }
  } catch (err) {
    next(err);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new Error("please provide email!"));
    }
    if (!password) {
      return next(new Error("please provide password!"));
    }
    let user = await User.findOne({ email });

    if (!user) {
      return next(
        new Error(
          "no user with this email found, please create account to login!"
        )
      );
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return next(new Error("password is incorrect!"));
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 1500000,
      })
      .json(user);
  } catch (err) {
    next(err);
  }
};

export const logoutUser = (req, res, next) => {
  res.clearCookie("token", { httpOnly: true }).json({
    message: "Logged Out",
  });
};
