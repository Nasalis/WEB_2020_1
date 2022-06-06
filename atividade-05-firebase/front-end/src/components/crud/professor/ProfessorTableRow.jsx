import React from "react";
import { Link } from "react-router-dom";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";
import { useFirebase } from "../../../utils/context/FirebaseContext";

const ProfessorTableRow = ({professor, deleteProfessorById}) => {
    const {_id,name,university,degree} = professor

    const {
        firebase
    } = useFirebase()

    function deleteStudent() {
        FirebaseProfessorService.delete(
            firebase.getFirestoreDatabase(),
            () => {},
            _id
        )
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