import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentTableRow from "./StudentTableRow";
import { useFirebase } from "../../../utils/context/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";

function ListStudent() {

    const [students, setStudents] = useState([])

    const {
        firebase
    } = useFirebase();

    useEffect(() => {
        FirebaseStudentService.list(
            firebase.getFirestoreDatabase(),
            (students) => setStudents(students)
        )
    }, [])


    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i=0;i<studentsTemp.length;i++){
            if(studentsTemp[i]._id === _id){
                studentsTemp.splice(i,1)
            }
        }
        setStudents([...studentsTemp]) 
    }
    

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow student={student} key={i} deleteStudentById={deleteStudentById} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Student
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListStudent