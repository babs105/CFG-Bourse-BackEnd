const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema({
    login: { type: String, unique: true },
    password: { type: String, required: true }
});
module.exports.userModel = mongoose.model("User", userSchema);