import * as bcrypt from "bcrypt";

import { UserModel } from "../../../schemas/User";
import { findUser } from "../user/user";

export const register = async (
  email: string,
  password: string,
  repeatPassword: string
) => {
  const emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const isEmailValid = emailRegExp.test(email);

  if (!isEmailValid) {
  } // Throw Error

  if (password && repeatPassword) {
  } // Throw Error

  const user = new UserModel({ email, password });
  await user.save();
};

export const login = async (email: string, password: string) => {
  try {
    const user = await findUser(email);

    if (!user) {
      throw new Error("No user found");
    }
  } catch (err: any) {}
};
