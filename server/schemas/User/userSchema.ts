import mongoose, { Schema } from "mongoose";
import * as bcrypt from "bcrypt";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;

    next();
  });
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
