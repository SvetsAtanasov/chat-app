import { UserModel } from "../../../schemas";

export const findUser = async (email: string) =>
  await UserModel.findOne({ email });

export const findAllUsers = async () =>
  await UserModel.find({}).select("_id, email");
