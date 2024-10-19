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

export default authRouter;
