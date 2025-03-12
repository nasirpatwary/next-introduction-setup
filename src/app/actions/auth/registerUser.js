"use server"
import bcrypt from "bcrypt"
import dbConnect, { dataNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    // validations 
    const { email, password } = payload;
    if (!email || !password) return null
    const user = await dbConnect(dataNames.userInfo).findOne({ email: payload.email })
    if (!user) {
        const hashed_password = await bcrypt.hash(password, 10)
        payload.password = hashed_password
        const result = await dbConnect(dataNames.userInfo).insertOne(payload)
        console.log("insertOne --->", result);
        result.insertedId = result.insertedId.toString()
        return result
    }
    return null
};

export default registerUser;