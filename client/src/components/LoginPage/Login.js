import React,{useState,useContext, } from 'react';
import "./Login.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';




const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(AuthContext)
    const History = useHistory();
    const loginUser = () =>{
       
        axios.post(`http://localhost:5000/user/login`,{
            username,password
        },{withCredentials: true}).then(resp=>{
            setUser(resp.data.result.username)
            History.push('/')
        })
             
          
      }

    return (
        <div className="container-fluid">
            <div className="container-xl">
                <h1 className="login_h1">Login</h1>
                    <form className="login_form">
                        <label htmlFor="username" className="login_inputs">Username:</label>
                        <input  type="text" id="username" name='username' value={username} placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} />
                        <label htmlFor="password"  className="login_inputs">Password:</label>
                        <input  type="password" id="password" name='password' value={password} placeholder="Type your password" onChange={(e)=>setPassword(e.target.value)}  />
                    </form>
                    <button className="login_btn" onClick={loginUser}>Submit</button>
            </div>
            
        </div>
    )
}

export default Login
