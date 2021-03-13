import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <div className="register_page">
            <h1 className="reg_h1">Register here to start your journey !</h1>
           <form className="register_form">
               <label className="reg_label"><p className="reg_paragraph">Username:</p></label>
               <input type='text' className="reg_input" placeholder="Enter your username" name="username"/>
               <label className="reg_label"><p className="reg_paragraph">Email:</p></label>
               <input type='email' className="reg_input" placeholder="Enter your email" name="email"/>
               <label className="reg_label"><p className="reg_paragraph">Password:</p></label>
               <input type='password' className="reg_input" placeholder="Enter your password" name="password"/>
               <label className="reg_label"><p className="reg_paragraph">Confirm Password:</p></label>
               <input type='password' className="reg_input" placeholder="Repeat password" name="RePassword"/>
           </form>
           <button type="button" className="submit_btn">Submit</button>
        </div>
    )
}

export default Register
