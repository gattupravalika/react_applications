import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function NavBar() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    let login = (e) => {
        // e.preventDefault();
        if (name === pass) {
            navigate("/dashBoard");
            console.log("yes");
        } else {
            alert("Invalid Username / Password.....");
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fw-bold">
                                <Link to="/login" className="nav-link btn btn-outline-info me-1" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">SignIn</Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link to="/register" className="nav-link btn btn-outline-info me-1" aria-current="page" href="#">SignUp</Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link to="/dashBoard" className="nav-link btn btn-outline-info" aria-current="page" href="#">dashboard</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center fw-semibold fs-3">
                            <h5 className="modal-title" id="staticBackdropLabel">Login Form</h5>
                        </div>
                        <div className="modal-body">
                            <div className="card mt-1 ms-5" style={{ width: "42rem" }}>
                                <div className="card-body text-start">
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label ">UserName</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="UserName" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
                            {name} {pass}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar
