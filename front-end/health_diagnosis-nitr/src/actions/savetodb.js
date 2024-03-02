'use server';

import { connectToDB } from "@/utils/connectDB";
import User from "@/models/user";

async function savetodb(profile) {
    try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
            await User.create({
                email: profile.email,
                name: profile.name,
                image: profile.image,
                gender: profile.gender,
                bloodgrp: profile.bloodgrp
            });
        }
        console.log("Saved to database")
        return true
    } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
    }
}
export default savetodb