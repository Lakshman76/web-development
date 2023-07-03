const User = require('../models/user.model.js')

exports.home = (req, res)=>{
    res.send('<h1>Home response</h1>');
}
exports.createUser = async(req, res)=>{
    try {
        const {name, email} = req.body
        if(!name || !email){
            throw new Error('Name and Email are required')
        }
        // check if user is already registered
        const userExist = await User.findOne({email})
        if(userExist){
            throw new Error('User Already exists')
        }
        const user = await User.create({
            name, 
            email
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })

    } catch (error) {
       console.log(error); 
       res.status(400).json({
        success:false,
        message: error.message
       })
    }  
}

exports.getUser = (req, res)=>{}
exports.editUser = (req, res)=>{}
exports.deleteUser = (req, res)=>{}
