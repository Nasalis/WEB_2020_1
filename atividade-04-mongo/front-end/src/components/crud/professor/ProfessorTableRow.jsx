import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfessorTableRow = ({professor, deleteProfessorById}) => {
    const {_id,name,university,degree} = professor

    function deleteStudent() {
        if (window.confirm(`Deseja excluir o professor ${name}?`)) {
            axios.delete(`http://localhost:3002/professors/delete/${_id}`)
            .then(response => deleteProfessorById(_id))
            .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editProfessor/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger"  onClick={() => deleteStudent()}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow