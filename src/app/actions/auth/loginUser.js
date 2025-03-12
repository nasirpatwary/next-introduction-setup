"use server"
import dbConnect, { dataNames } from '@/lib/dbConnect';
import bcrypt from "bcrypt"
const loginUser = async (payload) => {
   const { email, password } = payload;
   const user = await dbConnect(dataNames.userInfo).findOne({ email })
   console.log("mongodb findOne --->", user);
   if (!user) return null
   const isPassword = await bcrypt.compare(password, user.password)
   if (!isPassword) return null
   return user
};

export default loginUser;