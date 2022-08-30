import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import StoreServices from '../services/StoreServices';
//import Create from './Create';
function Login() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [luser, setluser] = useState([]);
    const getuserdetails = async (e) => {
        const userdata = await StoreServices.getAllData();
        setluser(userdata.data);
        console.log("User list is:" + JSON.stringify(luser));
      };
      useEffect(() => {
        getuserdetails();
      }, []);
    
      function login() {
        luser.filter((str) => {
            console.log("map data====" + JSON.stringify(str));
            alert("login success");
          if (str.username === userName && str.password === password) {
            navigate("/List");
          }
          else{
            alert("enter valid user name or password")
          }
        });
      }
    return (
        <div className='container mt-10' >
            <center><h1>Login Page</h1>
                <div >
                    <div className="mb-3 row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="staticEmail" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
                        <div className="col-sm-3">
                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                      </div><br /><br />
                        <div className='log'>
                        <button type="button" class="btn btn-primary"onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </center>



       </div>
    )
}

export default Login