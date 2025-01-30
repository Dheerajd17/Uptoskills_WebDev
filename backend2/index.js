import connectDB from "./database/connectDB.js";
import app from "./app.js";
import dotenv from "dotenv"
dotenv.config();

(async() => {
  const connectionInstance = await connectDB();
  if (!connectionInstance) {
    console.error("SOME ERROR OCCURED WHILE CONNECTING TO DATABASE");
  } else {
    app.listen(process.env.PORT, () => {
      console.log("App started at PORT :", process.env.PORT);
    });
  }
})();
