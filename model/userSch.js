const mongoose = require('mongoose');

const userSch = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const userData = mongoose.model('userData', userSch);

module.exports = userData;