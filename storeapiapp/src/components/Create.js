import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StoreServices from '../services/StoreServices';
function Create() {
    const[id,setId]=useState();
    const [username, setUserName] = useState();
    const [useremail, setUserEmail] = useState();
    const [password, setPassword] = useState();
    const [phoneno, setPhoneno] = useState();
    const [city, setCity] = useState();
    const navigate = useNavigate();
    const createStore=(e)=>{
    e.preventDefault();
    let obj = {
        "id":parseInt(id),
        "username":username,
        "useremail":useremail,
        "password":password,
        "phoneno":phoneno,
        "city":city
    }
    StoreServices.createStore(obj).then((res)=>{
        navigate("/Login")

    });
}
    return (
        <div>
            <h1>Register Form</h1>
           <center>
                <form className='register-style'>

                <div className=" align-items-center">
                        <label for="exampleInputUserName" className="col-sm-2 col-form-label">User Id</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="exampleInputUserName" onChange={(e) => setId(e.target.value)} />
                        </div>
                    </div>

                   <div className=" align-items-center">
                        <label for="exampleInputUserName" className="col-sm-2 col-form-label">User Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="exampleInputUserName" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                    </div>
                    <div className=" align-items-center">
                        <label for="exampleInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                        <div className="col-sm-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                    </div>
                   <div className=" align-items-center">
                        <label for="exampleInputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-3">
                            <input type="password" className="form-control" id="exampleInputPassword" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                   <div className=" align-items-center">
                        <label for="exampleInputPhone" className="col-sm-2 col-form-label">Phone No</label>
                        <div className="col-sm-3">
                            <input type="number" className="form-control" id="exampleInputPhone" onChange={(e) => setPhoneno(e.target.value)} />
                        </div>
                    </div>
                   <div className=" align-items-center">
                        <label for="exampleInputCity" className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="exampleInputCity" onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={createStore}>Submit</button>
                </form>
            </center>
        </div>
    )
}
export default Create