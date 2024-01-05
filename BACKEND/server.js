const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://IreshDB:IreshDB@cluster01.s0ull8e.mongodb.net/PSR_UserManagement?retryWrites=true&w=majority';

const connect = async () => {
    try{
        await (mongoose.connect(uri));
        console.log("Connected to MONGODB")
    }catch(error){
        console.log("MongoDB error", error);
    }

}

connect();

const server= app.listen(port,host, ()=>{
    console.log(`Server is running on http://${host}:${server.address().port}/`);
});






app.use('/api', router);
