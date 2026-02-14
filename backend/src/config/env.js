import dotenv from "dotenv"

dotenv.config();

export const ENV = {
    NODE_ENV:process.env.NODE_ENV,
    PORT:process.env.PORT,
    DB_URL: process.env.DB_URL,

    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    CLOUDINARY_CLOUD_NAME:process.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_SECRET:process.CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY:process.CLOUDINARY_API_KEY,

    INNGEST_SIGNIN_KEY:process.env.INNGEST_SIGNIN_KEY
} 