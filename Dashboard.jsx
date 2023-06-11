import React from 'react';
import { Login } from './Login';


export const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>WELCOME TO THE UNIVERSITY OF GHANA SCHOOL OF ENGINEERING SCIENCES</h1>
      </header>
      
      <section>
        <h2>About Us</h2>
        <p>
        “Engineering is the art of modelling materials we do not wholly understand,
         into shapes we cannot precisely analyse so as to withstand forces we cannot properly assess, 
         in such a way that the public has no reason to suspect the extent of our ignorance.”- Dr. AR Dykes
        </p>
        <p>Login for more info</p>
        <Login/>
      </section>
      <section>
        <h2>Our Programs</h2>
        <ul><style> float: left </style>
          <li>Computer Engineering</li>
          <li>Food Processing Engineering</li>
          <li>Bio Medical Engineering </li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 My School. All rights reserved.</p>
      </footer>
    </div>
  );
};



