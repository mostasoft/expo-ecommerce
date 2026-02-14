export const conectDB = async () => {
    try {
        console.log("DB_URL from ENV:", ENV.DB_URL);

        const connection = await mongoose.connect(ENV.DB_URL);

        console.log(`Connected to the MONGODB: ${connection.connection.host}`);

    } catch (error) {
        console.error("database connection error:", error.message);
        process.exit(1);
    }
};
