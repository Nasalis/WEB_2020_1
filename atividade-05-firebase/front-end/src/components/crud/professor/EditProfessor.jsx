
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";
import { useFirebase } from "../../../utils/context/FirebaseContext";

function EditProfessor() {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    const {
        firebase
    } = useFirebase()

    useEffect(() => {
        FirebaseProfessorService.retrieve_promisse(
           firebase.getFirestoreDatabase(),
           (student) => {
               setName(student.name)
               setUniversity(student.university)
               setDegree(student.degree)
           },
           params.id
       )
    }, [params.id])

    const handleSubmit = (event) => {
        event.preventDefault()
        const updateProfessor = { name, university, degree }
        FirebaseProfessorService.update(
            firebase.getFirestoreDatabase(),
            () => navigate("/listProfessor"),
            params.id,
            updateProfessor
        )
    }

    return (
        <>
            <main>
                <h2>
                    Editar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={name ?? ""}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titulação: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? 0}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor