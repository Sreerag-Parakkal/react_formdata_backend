const mongoose = require ("mongoose");


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        minlength:[4,"Fullname should have minimum 4 characters"]
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
});


module.exports = mongoose.model('User',userSchema);