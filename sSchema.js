const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    branch:String,
    Roll:Number
})

module.exports = mongoose.model('students',studentSchema);