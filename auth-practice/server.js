dotenv.config()
import app from "./src/app.js";
import ConnectDB from "./config/database.js";
import dotenv from "dotenv"

ConnectDB()

app.listen(3000, () => {
  console.log("app listen at porst 3000");
});
