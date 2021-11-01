const express = require('express');

const app= express();

const port = process.env.PORT || 8080;

app.use(express.json());

require('./db/conn');

app.use(require('./routers/auth'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})