import React,{useState} from 'react';
import "./Register.css";
import { useHistory } from 'react-router-dom';

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

        fetch('http://localhost:5000/user/register',{
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "same-origin",
            body: JSON.stringify(userdata)
        }).then(resp=>{
            if(resp.statusText === 'Unauthorized') {
                console.log('Something happened we cant continue with registration ')
                 
            } else {
                console.log('User is created.')
                History.push('/login');
            }
        }).catch(error=>console.log(error))
        
    }

    return (
        <div className="register_page">
            <h1 className="reg_h1">Register here to start your journey !</h1>
           <form className="register_form">
               <label className="reg_label"><p className="reg_paragraph">Username:</p></label>
               <input type='text' className="reg_input" value={username} placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} name="username"/>
               <label className="reg_label"><p className="reg_paragraph">Email:</p></label>
               <input type='email' value={email} className="reg_input" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} name="email"/>
               <label className="reg_label"><p className="reg_paragraph">Password:</p></label>
               <input type='password' value={password} className="reg_input" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} name="password"/>
               <label className="reg_label"><p className="reg_paragraph">Confirm Password:</p></label>
               <input type='password' value={rePassword} className="reg_input" placeholder="Repeat password" onChange={(e)=>setRePassword(e.target.value)} name="RePassword"/>
           </form>
           <button type="button" className="submit_btn" onClick={registerUser}>Submit</button>
        </div>
    )
}

export default Register
