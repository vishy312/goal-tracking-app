import env from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

env.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || "8080";

    app.on("error", (err) => {
      console.log("An error occured");
      throw err;
    });

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
