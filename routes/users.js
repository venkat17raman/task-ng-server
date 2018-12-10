
const express=require('express');
const route=express.Router();
const User=require('../models/user');






route.post('/isloggedin',async(req,res)=>{
    res.json({
        status:!!req.session.email
    })
})

route.get('/data',async (req,res)=>{
    const user =await User.findOne({email:req.session.email});
    if(user){
        res.json({
            status:true,
        email:user.email,
        quote:user.quote
        })
        
    }else{
        res.json({
       
            status:false,
            message:'user was deleted'
        })

    }
   
    
   
})
route.get('/logout',(req,res)=>{
    req.session.destroy();
    
    res.json({
        success:true
    })
})
route.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('hii')
    User.findOneAndRemove({ '_id': id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})
route.post('/user', (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)

        })
})

route.get('/user', (req, res) => {
    User.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

route.get('/user/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

route.put('/user/:id', (req, res) => {
    const id = req.params.id;
    User.findOneAndUpdate({ '_id': id }, { new: true })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })

})

route.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('hii')
    User.findOneAndRemove({ '_id': id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    })
module.exports = route;