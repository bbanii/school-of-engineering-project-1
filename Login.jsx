import React, { useState } from "react";


export const Login = (props) => {
    const [ID, setID] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ID);
    }

    return (
        
        <div className="auth-form-container">
             
            <h2>SCHOOL OF ENGINEERING</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Student ID">Student ID</label>
                <input value={ID} onChange={(e) => setID(e.target.value)}type="" placeholder=" " id="email" name="Student ID" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}></button>
        </div>
    )
}