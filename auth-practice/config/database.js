import mongoose from "mongoose";

function ConnectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("practice-database connected successfully")
    })
}
export default ConnectDB