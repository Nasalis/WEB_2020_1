import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const StudentTableRow = ({student, deleteStudentById}) => {
    const {_id,name,course,ira} = student

    function deleteStudent() {
        if (window.confirm(`Deseja excluir o estudante ${name}?`)) {
            axios.delete(`http://localhost:3002/students/delete/${_id}`)
            .then(response => deleteStudentById(_id))
            .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editStudent/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={() => deleteStudent()}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow