
const express=require('express');
const route=express.Router();
const User=require('../models/user');





route.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body

    const existingUser= await User.findOne({email})

    if(existingUser)
    {
        res.json({
            success:false,
            message:"Email already in use"
        })
        return;
    }
    const user=new User({
        name,
        email,
        password
    })
    const result=await user.save();
    console.log(result)
    res.json({
        success:true,
        message:"Welcome"
    })
})
module.exports = route;