import { Router } from "express";
import { findAllUsers } from "../../services/database/user/user";

const userRouter = Router();

userRouter.get("/users", async (req, res) => {
  try {
    const users = await findAllUsers();

    res.status(200).json({ users });
  } catch (err: any) {}
});

export default userRouter;
