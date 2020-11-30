import React from "react";

import LogIn from "../logIn/logIn.component";
import Sale from "../sale/sale.component"

import "./first.styles.scss"

const First =()=>{
    return(
        <div className="first">
            <LogIn/>
            <Sale/>
        </div>
    )
}
export default First;