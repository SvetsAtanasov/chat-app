import mongoose, { Schema } from "mongoose";
import * as bcrypt from "bcrypt";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const UserModel = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
  bcrypt.hash(this.password, 10).then((val) => {
    this.password = val;
  });

  next();
});

export default UserModel;
