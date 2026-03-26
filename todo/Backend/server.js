dotenv.config()
import dotenv from "dotenv"
import app from "./src/app.js"
import ConnectDB from "./config/database.js"

ConnectDB()

app.listen(3000,()=>{
    console.log("Server listen at port 3000")
})