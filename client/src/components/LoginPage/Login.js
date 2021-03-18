import React,{useState} from 'react';
import "./Login.css";
import axios from 'axios'

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    let userdata = {
        username: username,
        password: password,
        
    }

    const loginUser = () =>{
       
        

       
        
    }

    return (
        <div className="container-fluid">
            <div className="container-xl">
                <h1 className="login_h1">Login</h1>
                    <form className="login_form">
                        <label htmlFor="username" className="login_inputs">Username:</label>
                        <input  type="text" name='username' value={username} placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} />
                        <label htmlFor="password" className="login_inputs">Password:</label>
                        <input  type="password" name='password' value={password} placeholder="Type your password" onChange={(e)=>setPassword(e.target.value)}  />
                    </form>
                    <button className="login_btn" onClick={loginUser}>Submit</button>
            </div>
            
        </div>
    )
}

export default Login
