const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name:String,
    email: String,
    age: String
})

const User = mongoose.model("User", userSchema)



module.exports = User