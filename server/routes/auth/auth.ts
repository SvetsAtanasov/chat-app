import { Router } from "express";
import * as bcrypt from "bcrypt";

import { register } from "./../../services/database/auth/authController";
import { findUser } from "../../services/database/user/user";

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

  try {
    const user = await findUser(email);

    if (!user) {
      throw new Error("Invalid Email");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid Password");
    }

    res.status(200).json({ success: "Login successfull" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default authRouter;
