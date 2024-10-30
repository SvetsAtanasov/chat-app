import * as mongoose from "mongoose";

const initMongoDb = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    "mongodb+srv://Svets:Atanasov%401@clusterprojects.rrcjl.mongodb.net/chatApp"
  );
};

export default initMongoDb;
