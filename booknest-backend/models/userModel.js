const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = {
  userName: {type: String, required: true, lowercase: true, trim: true},
  email: {type: String, required: true, lowercase: true, trim: true},
  password: String,
}

const User = mongoose.model("User", userSchema); 

module.exports = User; 