const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

//middle ware
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//rest API
app.get('/users',(req, res) =>{
    var resObj = [];
    controller.getUsers((req,res,next)=>{
        res.send();
    });
});


app.post('/createuser', (req,res)=>{
    
    controller.addUser(req.body,(callback)=>{
        res.send();
    });
});

app.post('/updateuser', (req,res)=>{
    
    controller.updateUser(req.body,(callback)=>{
        res.send(callback);
    });
});

app.delete('/deleteuser/:id', (req,res)=>{
    
    const userId = req.params.id;
    controller.deleteUser(userId,(callback)=>{
        res.send();
    });
});


module.exports = app;