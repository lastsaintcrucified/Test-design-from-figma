import React, {useState} from 'react';

import {AiOutlineMail,AiOutlineCloseCircle} from "react-icons/ai"
 
import "./email.styles.scss";




const Email = () =>{
    const [email,setEmail] = useState("");
    
    
    const handleChange = e =>{
        const { value, name } = e.target;
        setEmail(value)
    }
    const clear = ()=>{
        setEmail("")
    }
    return(
        <div className="form-input">
            <input name="email" value={email} className='email-input' onChange={handleChange}/>
            <AiOutlineMail className="icon"/>
            <AiOutlineCloseCircle className="close" onClick={clear}/>
            <label className={`${ email.length ? "shrink" : ""} form-input-label`}>
                 Email
            </label>
        </div>
    )
}
 export default Email;