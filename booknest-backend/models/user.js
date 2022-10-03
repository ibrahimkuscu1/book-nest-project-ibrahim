const mongoose= require("mongoose")

let userSchema = new mongoose.Schema({
    userName:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,},
    token:{type:String}

})

let User= new mongoose.model("user", userSchema);



module.exports=User;