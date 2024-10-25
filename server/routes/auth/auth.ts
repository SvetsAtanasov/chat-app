import { Router } from "express";
import { register } from "./../../services/database/auth/authController";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  try {
    await register(email, password, repeatPassword);

    res.status(200);
  } catch (err: any) {
    res.status(err.status).json({ error: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(200).json({ success: "Login successfull" });
  } catch (err: any) {}
});

export default authRouter;
