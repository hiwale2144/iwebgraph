const express = require('express');
const userData = require('../model/userSch');

const route = express.Router();

route.post('/registration', async(req,res)=>{
    const {username, phone, email, message} =req.body;
    console.log(username);
    console.log(phone);
    console.log(email);
    console.log(message);
    const regData = await new userData({username, message, phone, email});
    if(regData){
        const regDone = await regData.save();
        if(regDone){
            res.status(200).json({message:'DatabaseRegSucc'});
        }else{
            
        }
    }else{
        
    }
})

route.get('/reqdata', async(req,res)=> {
    const getAllData = await userData.find()
    console.log(getAllData);
    if(getAllData){
        res.status(200).send(getAllData)
    }else{
        res.send(400).json({message:'error'})
    }
})


module.exports = route;