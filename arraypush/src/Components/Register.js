import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [Pass, setPass] = useState("");
    const [CPass, setCPass] = useState("");
    const navigate = useNavigate();
    
    var arr = [{}];

    let login = (e) => {
        // if (name === pass) {
        //     navigate("/dashBoard");
        //     console.log("yes");
        // } else {
        //     alert("Invalid Username / Password.....");
        // }
      
        
     
       
       
        var name = document.getElementById("formGroupExampleInput1");
        arr.push(name);

        var name = document.getElementById("formGroupExampleInput2");
        arr.push(mail);

        var name = document.getElementById("formGroupExampleInput3");
        arr.push(Pass);

        var name = document.getElementById("formGroupExampleInput4");
        arr.push(CPass);

        console.log(arr);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);

    };
    const handleUserMail = (e) => {
        setMail(e.target.value);
    };
    const handleUserPass = (e) => {
        setPass(e.target.value);
    };
    const handleUserCPass = (e) => {
        setCPass(e.target.value);
    };

    

    return (
        <div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="card" style={{ width: "42rem" }} id="registrationcard">
                        <div class="card-header fw-semibold fs-3">
                            Registration Form
                        </div>
                        <div className="card-body text-start">
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label ">UserName</label>
                                <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="UserName" onChange={handleUserName} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">mail</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="main" onChange={handleUserMail} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Password" onChange={handleUserPass} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Conform Password</label>
                                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Conform Password" onChange={handleUserCPass} />
                            </div>


                        </div>
                        <div class="card-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary ms-1" onClick={login}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
