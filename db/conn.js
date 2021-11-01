const mongoose = require('mongoose')

const DB = 'mongodb+srv://shubhamHiwale:shubhiweb00@cluster0.xuch8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB,{

}).then(()=>{
    console.log('database connection successfully');
}).catch((err)=>{
    console.log(`database connection failed ${err}`);
})