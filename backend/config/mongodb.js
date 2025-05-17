import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Attach event listeners BEFORE connecting
        mongoose.connection.on("connected", () => {
            console.log("✅ Connected to MongoDB");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected");
        });

        // Now connect
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);

    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
