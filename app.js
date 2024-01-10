const express= require('express');
const bodyParser=require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('post-db');

const app =express();
app.use(bodyParser);

const port=process.env.Port || 3000;
app.listen(port,()=>{
    console.log('Listening on port'+port);
})