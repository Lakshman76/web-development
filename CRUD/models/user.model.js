const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Name is required'],
        trim:true,
        maxLength:[30,'Name must be less than 30 characters']
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    }
})

module.exports = mongoose.model('User', userSchema);
