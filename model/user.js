
const mongoose = require('mongoose');

//defining schema of table/collection with fields and their constraints
var userSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: { type: String },
	email: { type: String },
	age: { type: Date, default: new Date()}
});

var User = mongoose.model('User', userSchema);

module.exports = User;