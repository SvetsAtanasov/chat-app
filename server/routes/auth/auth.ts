import { Router } from "express";
import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken";
import * as dotenv from "dotenv";
import * as util from "util";

import { register } from "./../../services/database/auth/authController";
import { findUser } from "../../services/database/user/user";

dotenv.config();

const jwt: any = {
  sign: util.promisify(jsonwebtoken.sign),
  verify: util.promisify(jsonwebtoken.verify),
};

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  try {
    await register(email, password, repeatPassword);

    res.status(200).json({ success: "Registration successful" });
  } catch (err: any) {
    res.status(err.status).json({ error: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    const user = await findUser(email);

    if (!user) {
      throw new Error("Invalid Email");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid Password");
    }

    const jwtToken = await jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ email: user.email, jwtToken });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default authRouter;
