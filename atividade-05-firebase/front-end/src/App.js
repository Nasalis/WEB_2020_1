import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
//import "./App.css";

import { Home } from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";
import SignUpPage from "./pages/SignUp";
import FirebaseUserService from "./services/FireBaseUserService";
import ToastApp from "./components/Toast";


function App(props) {
  const [logged, setLogged] = useState(false)

  const [showToast, setShowToast] = useState(false); //TOAST
  const [toast, setToast] = useState({ header: '', body: '' }) //TOAST

  const navigate = useNavigate()

  const logout = () => {
    FirebaseUserService.logout(
      props.firebase.getAuthentication(),
      (res) => {
        if (res) {
          props.firebase.setUser(null)
          setLogged(false)
          navigate('/')
        }
      }
    )
  }

  const renderLoginButtonLogout = () => {
    if (props.firebase.getUser() != null)
      return (
        <div style={{ marginRight: 20 }}>
          Olá, {props.firebase.getUser().email}
          <button onClick={() => logout()} style={{ marginLeft: 20 }}>Logout</button>
        </div>
      )
    return
  }

  //TOAST
  const renderToast = () => {
    return <ToastApp
      show={showToast}
      header={toast.header}
      body={toast.body}
      setShowToast={setShowToast}
      bg='secondary'
    />
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Aplicação</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="navitem">
                    <Link to="/createStudent" className="nav-link">Create Student</Link>
                  </li>
                  <li className="navitem">
                    <Link to="/listStudent" className="nav-link">List Student</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Professor
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="navitem">
                    <Link to="/createProfessor" className="nav-link">Create Professor</Link>
                  </li>
                  <li className="navitem">
                    <Link to="/listProfessor" className="nav-link">List Professor</Link>
                  </li>
                </ul>
              </li>
            
            </ul>
          </div>
        </div>
      </nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<SignUpPage setLogged={setLogged} setShowToast={setShowToast} setToast={setToast}/>} />

        <Route path="createStudent" element={<CreateStudent setShowToast={setShowToast} setToast={setToast}/>} />
        <Route path="listStudent" element={<ListStudent setShowToast={setShowToast} setToast={setToast}/>} />
        <Route path="editStudent/:id" element={<EditStudent setShowToast={setShowToast} setToast={setToast}/>} />

        <Route path="createProfessor" element={<CreateProfessor setShowToast={setShowToast} setToast={setToast}/>} />
        <Route path="listProfessor" element={<ListProfessor setShowToast={setShowToast} setToast={setToast}/>} />
        <Route path="editProfessor/:id" element={<EditProfessor setShowToast={setShowToast} setToast={setToast}/>} />
      </Routes>
    </div>

  );
}

export default App