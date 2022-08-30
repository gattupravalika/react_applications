import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
function NavBar() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/login">SignIn</Link></li>
                    <li><Link to="/Register">SignUp</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default NavBar
