import mongoose from "mongoose";

const Connection = async (username, password) => {

  const URL = `mongodb://${username}:${password}@ac-z23qsnx-shard-00-00.0qmpi01.mongodb.net:27017,ac-z23qsnx-shard-00-01.0qmpi01.mongodb.net:27017,ac-z23qsnx-shard-00-02.0qmpi01.mongodb.net:27017/?ssl=true&replicaSet=atlas-1157zd-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
      });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connected with database", error);
  }
};

export default Connection;
