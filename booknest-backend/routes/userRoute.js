const express = require('express')
const bcrypt = require("bcrypt")
const  router= express.Router()
const jwt=require("jsonwebtoken")
require("dotenv").config();
const userModel=require("../models/user")





router.post("/signup", async(req,res)=>{
    
    try{
        const userInfo={
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password,
        }
    
        if (!req.body.userName || !req.body.email ||!req.body.password )
        {return res.send({msg:"username, email and password are neccesary"})}

        
    
        const oldUser= await userModel.findOne({email:req.body.email});
        if(oldUser){
            res.status(409).send({msg:"please login, or use another email to register"})
        }
        else{
            const encryptedPassword= await bcrypt.hash(req.body.password,11);
            const newUser=userModel.create({
                userName:req.body.userName,
                email:req.body.email,
                password:encryptedPassword,
            
            })
            const payload={
                userName:newUser.userName,
                email:newUser.email
            }
            const token= jwt.sign(payload, process.env.Private_Key,{expiresIn:"2h"});
            newUser.token=token;
           
           
            
            
            (err)=>{
                if (err) {console.log(err)
                    
                }
                res.send({msg:"user registered",newUser})
            }
        }
    }

        
    catch(err){
        console.log(err)
                    
    }
})

router.post("/login", async(req,res)=>{
    // const user ={
    //         email:req.body.email,
    //         password:req.body.password
    // }
    try{
        if(!req.body.email || !req.body.password){
            return res.send({msg:"invalid email or password"})
        }
    
        const user= await userModel.findOne({email:req.body.email});
        if(!user){
            res.send({msg:"please enter valid email and password"})
        }
        else{
            const validatePassword= await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(validatePassword){
                const payload={
                    userName:user.userName,
                    email:user.email
                }
            const token= jwt.sign(payload, process.env.Private_Key,{expiresIn:"2h"});
                user.token =token;
                res.send(token) 
        }
      
    }       
        
    }

    catch(err){
        console.log(err)
    }
   
});

module.exports=router