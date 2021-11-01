const express = require('express');

const app= express();

const port = process.env.PORT || 8080;

app.use(express.json());

require('./db/conn');

app.use(require('./routers/auth'));

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})