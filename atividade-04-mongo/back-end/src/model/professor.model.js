const mongoose = require('mongoose');

const ProfessorsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    university: {
        type: String,
        required: true,
        max: 100
    },
    degree: {
        type: String,
        required: true
    }
})

const ProfessorModel = mongoose.model('professors', ProfessorsSchema);

module.exports = ProfessorModel