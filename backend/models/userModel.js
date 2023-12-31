const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userModel = mongoose.Schema ({
    name : {
        type : String , 
        required : true 
    } , 
    password : {
        type : String , 
        required : true
    } ,
    email : { 
        type : String , 
        required : true , 
        unique : true
    } , 
    mobile : {
        type: String, // Store the number as a string
        unique: true,
        required: true,
    } ,
    pic : {
        type : String , 
        // required : true , 
        default : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    }
} , 
{
    timestamps : true
}
)

userModel.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

// middleware
// before saving we mmust encrypt the password
userModel.pre('save' , async function (next) {
    if(!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(15);
    this.password = await bcrypt.hash(this.password , salt)
})

const User = mongoose.model("User" , userModel);

module.exports = User;