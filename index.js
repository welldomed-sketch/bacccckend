import dotenv from "dotenv";
import connectDB from "./database.js";
import app from "./app.js"
dotenv.config();
const startserver=async()=>{
    try{ await connectDB();
        app.on("error",(error)=>{  
            console.log("error",error)
            throw error;
        })
        app.listen(process.env.PORT||8000,()=>{
            console.log(`server is running ${process.env.PORT}`)
        })
 }
    catch(error){
        console.log("connection failed")

    }
}
 startserver();