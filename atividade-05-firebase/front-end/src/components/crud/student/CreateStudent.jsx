import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseStudentService from "../../../services/FirebaseStudentService";
import { useFirebase } from "../../../utils/context/FirebaseContext";

function CreateStudent() {

    const [name,setName] = useState("");
    const [course,setCourse] = useState("");
    const [ira,setIRA] = useState(0);
    const navigate = useNavigate();
    const {
        firebase
    } = useFirebase();


    const handleSubmit = (event) => {
        event.preventDefault()
        const newStudent = {name, course, ira}

        FirebaseStudentService.create(
            firebase.getFirestoreDatabase(),
            () => navigate("/listStudent"),
            newStudent
        )
    }

    return (
        <>
            <main>
                <h2>
                    Criar Estudante
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
                        <label>Curso: </label>
                        <input type="text" 
                               className="form-control"
                               value={course ?? ""}
                               name="course" 
                               required
                               onChange={(event)=>{setCourse(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" 
                               className="form-control"
                               value={ira ?? 0}
                               name="ira" 
                               required
                               onChange={(event)=>{setIRA(event.target.value)}}/>
                    </div>
                    <div className="form-group" style={{paddingTop:20}}>
                        <input type="submit" value="Criar Estudante" className="btn btn-primary"/>
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CreateStudent