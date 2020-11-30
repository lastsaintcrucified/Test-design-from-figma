import React, {useState} from 'react';

import {AiOutlineSearch,AiOutlineCloseCircle} from "react-icons/ai"
 
import "./email3.styles.scss";




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
        <div className="form-input3">
            <input name="email" value={email} className='email-input3' onChange={handleChange}/>
            <AiOutlineSearch className="icon3"/>
            
        </div>
    )
}
 export default Email;