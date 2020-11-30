import React, {useState} from 'react';

import {AiOutlineMail,AiOutlineCloseCircle} from "react-icons/ai"
 
import "./email2.styles.scss";




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
        <div className="form-input2">
            <input name="email" value={email} className='email-input2' onChange={handleChange}/>
            <AiOutlineMail className="icon2"/>
            <AiOutlineCloseCircle className="close2" onClick={clear}/>
            <label className={`${ email.length ? "shrink" : ""} form-input-label2`}>
                 Email
            </label>
        </div>
    )
}
 export default Email;