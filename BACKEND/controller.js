const User = require('./model.js');
const response = require('./app');



/*
const users = [
    {
        id:1,
        name:"iresh",
    },
    {
        id:2,
        name:"kasun",
    },
];*/

//read users
const getUsers = (req,res,next) => {
    User.find().then(response =>{
        res.json({response});
    }).catch(error=>{
        res.json({error: error})
    })
};

//add user
const addUser = (req,res,next) =>{
    const newUser = new User({
        id: req.body.id,
        name: req.body.name,
    });

   newUser.save().then(response =>{
        res.json({response});
    }).catch(error=>{
        res.json({error: error})
    })
}


//edit user
const updateUser = (req,res,next) =>{
    
    
    /*const id = req.body.id;
    const name = req.body.name;*/

    //this can write by object de sctructuring as follows
    const {id,name} = req.body;
    User.updateOne({id:id}, {$set:{name:name}}).then(response =>{
        res.json({response});
    }).catch(error=>{
        res.json({error: error})
    })
}



//delete user
const deleteUser = (req,res,next) => {

   // const id = req.body.id;

   const id = req.params.id;
   
    User.deleteOne({id:id}).then(response =>{
        res.json({response});
    }).catch(error=>{
        res.json({error: error})
    })
}



/*

const getUserById = (id,cb) =>{
    const user = users.find(user => user.id == id);
    if (user) {
        cb(user);
    } else {
        // Handle the case where the user is not found
        cb({ error: 'User not found' });
    }

}*/

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;