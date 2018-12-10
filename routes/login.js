
const express=require('express')
const route=express.Router();
const User=require('../models/user');

route.post('/login',async(req,res)=>{
    const {email,password} = req.body
    const result= await User.findOne({email})
    if(!result)
    {
      //  console.log("incorrect details")
      res.json({
          success:false,
          message:"Incorrect details"
      })

    }else{
        res.json({
            success:true,
           
        })
        req.session.user=email
        req.session.save();
        console.log("logging you in")
    }
})
module.exports = route;
