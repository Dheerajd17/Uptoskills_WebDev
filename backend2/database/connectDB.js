import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.DATABASE_URL}/UserInformation`);
        if(connect){
            console.error("DATABASE CONNECTED SUCCUSSFULLY ");
            return connect;
        }
    } catch (error) {
        console.log("DATABASE NOT CONNECTED!");
        return error;
    }
}

export default connectDB;

