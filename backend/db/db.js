import mongoose from "mongoose";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export const connectDB = async () => {
  try {
    const mongoURI = `${process.env.MONGO_URI}`;
    console.log(mongoURI);

    const connectionInstance = await mongoose.connect(mongoURI, clientOptions);

    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Connected to Mongo Successfully",
      connectionInstance.connection.host
    );
    return;
  } catch (error) {
    console.log(
      "Something went wrong while mongodb connection ===>" +
        process.env.MONGO_URI
    );

    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
};
