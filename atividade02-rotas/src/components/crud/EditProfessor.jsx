
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { professors } from './data.js'

function EditProfessor() {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()

    //https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(
        () => {
            
            //console.log(params.id)
            const professor = professors[params.id]
            //console.log(professor)
            setName(professor.name)
            setUniversity(professor.university)
            setDegree(professor.degree)
        }
        ,
        [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        professors[params.id].name = name
        professors[params.id].university = university
        professors[params.id].degree = degree
        console.log(professors[params.id])
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
                            name="course"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titulação: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? 0}
                            name="ira"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Estudante" className="btn btn-primary" />
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