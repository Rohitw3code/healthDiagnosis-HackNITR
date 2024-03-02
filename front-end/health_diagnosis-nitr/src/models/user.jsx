import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email : {
        type : String,
        required : [true, 'Email is Required !'],
        unique : [true, 'Email Already Exist !']
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
      },
    image:{
        type: String,
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    bloodgrp: {
        type: String,
        required: [true, 'Blood group is required']
    },
})


const User = models.User || model("User", UserSchema)
export default User