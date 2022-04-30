const ProfessorModel = require("../model/ProfessorMode")

let professors = [
    {_id:0, name:"Jefferson de Carvalho", university: "UFC", degree: "Mestre"},
    {_id:1, name:"Fulano de Tal", university: "UFC", degree: "Mestre"},
    {_id:2, name:"Sicrano de Tal", university: "UFC", degree: "Mestre"},
    {_id:3, name:"Beltrano de Tal", university: "UFC", degree: "Mestre"}
]


let _id = professors.length;

class ProfessorService {
    static create(data) {
        let newProfessor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree
        )
        professors.push(newProfessor)
        return newProfessor
    }

    static retrieve(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                return professors[i]
            }
        }
        return {}
    }

    static update(_id, data) {
        for (let professor of professors) {
            if (professor._id == _id) {
                professor.name = data.name;
                professor.university = data.university;
                professor.degree = data.degree
                return professor;
            }
        }
        return null
    }

    static delete(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
                professors.splice(i, 1)
                return true
            }
        }
        return false
    }

    static list() {
        return professors;
    }
}

module.exports = ProfessorService