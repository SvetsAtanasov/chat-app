import { UserModel } from "../../../schemas/User";

export const findUser = async (email: string) =>
  await UserModel.findOne({ email });
