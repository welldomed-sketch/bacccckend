import express from "express";
const app=express();
app.use(express.json());
import userrouter from"./userrout.js";
app.use("/api/users",userrouter);
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
export default app;