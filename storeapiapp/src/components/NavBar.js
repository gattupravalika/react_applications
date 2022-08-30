import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Api from './Api';
import Create from './Create';
import Login from './Login';


function NavBar() {
    return (
        <body className='Image'>
        <div className='container'>
            <BrowserRouter>
                <ul>
                <li>
                        <Link to="/home" ><button type="button" class="btn btn-secondary" >Home</button></Link>
                        </li>
                    <li>
                        <Link to="/Login" ><button type="button" class="btn btn-primary" >SignIn</button></Link>
                        </li>
                    <li> 
                        <Link to="/create" ><button type="button" class="btn btn-primary">SignUp</button></Link>
                    </li>
                    
                </ul>

                <Routes>
                   
                    <Route path="/Login" element={<Login />} />
                    <Route path="/List" element={<Api />} />
                    <Route path="/create" element={<Create />} />

                </Routes>
            </BrowserRouter>
        </div>
        </body>
    )
}



export default NavBar