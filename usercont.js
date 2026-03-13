import User from "./userm.js";
const createuser=async(req,res)=>{
    try{
        const {usersname,email,password}=req.body;
    if(!usersname || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser=await User.findOne({email:email.toLowerCase()});
    if(existingUser){
        return res.status(400).json({message:"Email already in use"});
    }
        const user=await User.create({
            usersname,
            email:email.toLowerCase(),  
            password});
            res.status(201).json({
                message:"User created successfully",
                user:{
                    id:user._id,
                    usersname:user.usersname,
                    email:user.email
                }
            }); 
        
    }catch(error){
        res.status(500).json({message:"Error creating user"});
    }
};
const loginuser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email.toLowerCase()});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        res.status(200).json({
            message:"Login successful",
            user:{
                id:user._id,
                usersname:user.usersname,
                email:user.email
            }
        });
    
    }catch(error){
        res.status(500).json({message:"Error logging in"});
    }
};
const logoutuser =async(req,res)=>{
    try{ const {email}=req.body;
        const user=await User.findOne({email:email.toLowerCase()}); 
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }   
        res.status(200).json({message:"Logout successful"});
    }catch(error){
        res.status(500).json({message:"Error logging out"});
    }
};
export {createuser,loginuser,logoutuser};
