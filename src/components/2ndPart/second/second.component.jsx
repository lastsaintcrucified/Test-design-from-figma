import React from "react"

import Mail from '../mail/mail.component';
import ButtonGroup from "../buttonGroup/buttonGroup.component";

import "./second.styles.scss";
const Second =()=>{
    return(
        <div className="scnd">
            <Mail/>
            <ButtonGroup/>
        </div>
    )
}

export default Second;