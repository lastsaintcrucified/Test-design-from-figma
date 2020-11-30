import React, {useEffect,useState} from 'react';

import {AiOutlineEye,AiOutlineCloseCircle,AiOutlineEyeInvisible} from "react-icons/ai";

import "./password.styles.scss";

const Password = () =>{

    const [className,setClassName] = useState("password");
    const [password,setPassword] = useState("")
    useEffect(() => {
        setPassword("")
        return ()=>{
            setPassword("") 
        }
    }, [])

    const handleChange = e =>{
        const { value } = e.target;
        setPassword(value)
    }
    const clear = ()=>{
        setPassword("")
    }
    const changeType = ()=>{
        if(className==="text"){
            setClassName("password")
        }else{
            setClassName("text")
        }
    }
    return(
        <div className="form-input">
            <input name="password" value={password} type={`${className}`} className="password-input" onChange={handleChange}/>
            {
                (className==="password")
                    ?(<AiOutlineEye className="eye" onClick={changeType}/>)
                        :<AiOutlineEyeInvisible className="eye" onClick={changeType}/>
            }
            <AiOutlineCloseCircle className="close" onClick={clear}/>
            <label className={`${password.length ? "shrink" : ""} form-input-label`}>
                Password 
            </label>
        </div>
    )
}
 export default Password;