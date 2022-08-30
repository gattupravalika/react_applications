import React, { useState } from 'react'
import { useNavigate } from 'react-router';
function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  var login=(e)=>{
    e.preventDefault();
   if(name===password){
    navigate("/Dashboard")
   }
   else{
    alert("invalid credentials.........")
   }
  }
  return (
    <div>
      <h1>Login Form</h1>

      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class='form-control' id='exampleUserName' onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class='form-control' id='examplePassword' onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <button class="btn btn-primary" onClick={login}>Login</button>
      </form>
      {name}{password}
    </div>
  )
}

export default Login
