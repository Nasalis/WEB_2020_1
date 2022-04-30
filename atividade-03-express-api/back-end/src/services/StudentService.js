const StudentModel = require("../model/StudentModel")

let students = [
    {_id:0, name:"Davi dos Santos", course: "Sistemas de Informação",ira:6.7},
    {_id:1, name:"Guthyerri Alexandrino", course: "Sistemas de Informação",ira:4.5},
    {_id:2, name:"Maria Eduarda", course: "Sistemas de Informação",ira:9.0},
    {_id:3, name:"Maria Alice", course: "Sistemas de Informação",ira:7.8},
]


let _id = students.length;

class StudentService {
    static create(data) {
        let newStudent = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira
        )
        students.push(newStudent)
        return newStudent
    }

    static retrieve(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                return students[i]
            }
        }
        return {}
    }

    static update(_id, data) {
        for (let student of students) {
            if (student._id == _id) {
                student.name = data.name;
                student.course = data.course;
                student.ira = data.ira
                return student;
            }
        }
        return null
    }

    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
                students.splice(i, 1)
                return true
            }
        }
        return false
    }

    static list() {
        return students;
    }
}

module.exports = StudentService