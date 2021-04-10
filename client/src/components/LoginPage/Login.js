import React,{useState,useContext } from 'react';
import "./Login.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import {NotificationContext} from '../../contexts/NotificationContext'





//login page components.This component holding information from global context values
const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(AuthContext);
    const {setNotifyMessagge,setNotify} = useContext(NotificationContext)
    const History = useHistory();
    const loginUser = () =>{
       
        axios.post(`http://localhost:5000/user/login`,{
            username,password
        },{withCredentials: true}).then(resp=>{
           if(resp.data.messagge) {
               setNotify(true)
               setNotifyMessagge({nMessagge:resp.data.messagge,nCollor:'Red'})
              return  setTimeout(() => {
                setNotify(false)
              }, 2000);  
           } else {
            setNotify(true)
            setNotifyMessagge({nMessagge:resp.data.success,nCollor:'LightGreen'})
            setUser(resp.data.result.username)
             setTimeout(() => {
                setNotify(false)
                
              }, 2000);  
              History.push('/')
           
           }
            
        }).catch(err=>{
            console.log(err)
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
