import React from "react";
import { Link } from "react-router-dom";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import { useFirebase } from "../../../utils/context/FirebaseContext";

const StudentTableRow = ({student, deleteStudentById}) => {
    const {_id,name,course,ira} = student
    const {
        firebase
    } = useFirebase()

    function deleteStudent() {
        FirebaseStudentService.delete(
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