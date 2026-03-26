import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username is already exists"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email has already exists"]
    },
    password:{
        type:String,
        required:true,
        select:false
    }
})

const userModel = mongoose.model('users',userSchema)

export default userModel