import React,{useState} from 'react';
import "./Register.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [rePassword,setRePassword] = useState('');
    const History = useHistory();

    let userdata = {
        username: username,
        password: password,
        email: email,
        rePassword: rePassword
    }

    const registerUser = ()=>{

        axios.post('http://localhost:5000/user/register',userdata)
        .then(resp=>{
            History.push('/')
        })
        
        
    }

    return (
        <div className="container-fluid">
            <div className="container-xl"> 
                <h1 className="reg_h1">Register here to start your journey !</h1>
                    <form className="register_form">
                        <label htmlFor="username" className="reg_label"><p className="reg_paragraph">Username:</p></label>
                        <input type='text' id="username" className="reg_input" value={username} placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} name="username"/>
                        <label htmlFor="email" className="reg_label"><p className="reg_paragraph">Email:</p></label>
                        <input type='email' id="email" value={email} className="reg_input" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} name="email"/>
                        <label htmlFor="password" className="reg_label"><p className="reg_paragraph">Password:</p></label>
                        <input type='password' id="password" value={password} className="reg_input" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} name="password"/>
                        <label htmlFor="rePassword" className="reg_label"><p className="reg_paragraph">Confirm Password:</p></label>
                        <input type='password' id="rePassword" value={rePassword} className="reg_input" placeholder="Repeat password" onChange={(e)=>setRePassword(e.target.value)} name="RePassword"/>
                    </form>
                 <button type="button" className="submit_btn" onClick={registerUser}>Submit</button>
               
           </div>
        </div>
    )
}

export default Register
