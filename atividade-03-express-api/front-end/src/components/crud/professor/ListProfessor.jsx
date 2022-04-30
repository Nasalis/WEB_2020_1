import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor() {

    const [professors, setProfessors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3002/crud/professors/list")
        .then(response => setProfessors(response.data))
        .catch(error => error)
    }, [])

    function deleteProfessorById(_id){
        let professorsTemṕ = professors
        for(let i=0;i<professorsTemṕ.length;i++){
            if(professorsTemṕ[i]._id === _id){
                professorsTemṕ.splice(i,1)
            }
        }
        setProfessors([...professorsTemṕ]) 
    }

    function generateTable() {
        if(!professors) return
        return professors.map(
            (professor,i) => {
                return <ProfessorTableRow professor={professor} key={i} deleteProfessorById={deleteProfessorById}/>
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Professor
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
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

export default ListProfessor