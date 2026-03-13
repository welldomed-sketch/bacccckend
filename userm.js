import mongoose ,{Schema} from "mongoose";  
import bcrypt from "bcrypt";
const userschema = new Schema({
    usersname:{
        type:String,
        required:true,
        unique:true,
        maxlength:50,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50,
        minlength:5,
    },
    password:{
        type:String,
        required:true,
        maxlength:100,
        minlength:6
 }},
 {
 timestamps:true  
 }
);
userschema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});
userschema.methods.comparePassword=async function(candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password);
};
const User = mongoose.model("User",userschema);
export default User;