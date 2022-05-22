import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { professors } from "../data";
import axios from "axios";

function CreateProfessor() {

    const [name,setName] = useState("")
    const [university,setUniversity] = useState("")
    const [degree,setDegree] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfessor = {name, university, degree}
        axios.post("http://localhost:3002/crud/professors/create/", newProfessor)
            .then(response => navigate("/listProfessor"))
            .catch(error => console.log(error))
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