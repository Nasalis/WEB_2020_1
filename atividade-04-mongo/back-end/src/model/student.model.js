const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    course: {
        type: String,
        required: true,
        max: 100
    },
    ira: {
        type: Number,
        required: true
    }
})

const StudentModel = mongoose.model('students', StudentSchema);

module.exports = StudentModel