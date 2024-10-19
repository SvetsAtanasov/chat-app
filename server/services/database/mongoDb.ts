import * as mongoose from "mongoose";

const initMongoDb = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/chatApp");
};

export default initMongoDb;
