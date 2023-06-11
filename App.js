import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { HomePage } from "./Dashboard";

function App() {
  const [currentForm, setCurrentForm] = useState('homepage');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {currentForm === "homepage" && <HomePage />}
      {currentForm !== "register" && (
        <button className="link-btn" onClick={() => toggleForm("register")}>
        Don't have an account? Register here.
      </button>
      )}
      {currentForm === "login" && <Login onFormSwitch={toggleForm} />}
       
      {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
      
     
    </div>
  );
}

export default App;
