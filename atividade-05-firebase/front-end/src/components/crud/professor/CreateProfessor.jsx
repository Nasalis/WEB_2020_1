import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";
import { useFirebase } from "../../../utils/context/FirebaseContext";

function CreateProfessor() {

    const [name,setName] = useState("")
    const [university,setUniversity] = useState("")
    const [degree,setDegree] = useState("")
    const navigate = useNavigate();
    const {
        firebase
    } = useFirebase()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfessor = {name, university, degree}

        FirebaseProfessorService.create(
            firebase.getFirestoreDatabase(),
            () => navigate("/listProfessor"),
            newProfessor
        )
    }

    return (
        <>
            <main>
                <h2>
                    Criar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" 
                               className="form-control" 
                               value={(name==null || name===undefined)?"":name}
                               name="name" 
                               required
                               onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text" 
                               className="form-control"
                               value={university ?? ""}
                               name="university" 
                               required
                               onChange={(event)=>{setUniversity(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text" 
                               className="form-control"
                               value={degree ?? "Mestrado"}
                               name="degree" 
                               required
                               onChange={(event)=>{setDegree(event.target.value)}}/>
                    </div>
                    <div className="form-group" style={{paddingTop:20}}>
                        <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CreateProfessor