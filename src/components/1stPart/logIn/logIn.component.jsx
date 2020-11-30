import React from 'react'
import Email from "../email/email.component";
import Password from "../password/password.component";

import "./logIn.styles.scss";

const LogIn=() =>{
    return(
         <div className="logIn">
                <h2>Login</h2>
                <Email/>
                <Password/>
                <button className='btn'>Login</button>
         </div>
    )
}

export default LogIn;