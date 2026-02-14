
import mongoose from "mongoose";
import { ENV } from "./env.js";


export const conectDB = async()=>{
    try {
        const connection = await mongoose.connect(ENV.DB_URL)
        console.log(`Connected to the MONGODB: ${connection.connection.host}`)

    } catch (error) {
        console.error("database connection error")
        process.exit(1)
    }
}