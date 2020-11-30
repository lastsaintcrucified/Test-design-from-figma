import React from 'react';
import Email from "../email3/email3.component";
import {IoMdSwitch} from "react-icons/io";

import "./search.styles.scss";

const Search =()=>{
    return(
        <div className="search">
            <Email/>
            <button className="btn"><IoMdSwitch/></button>
        </div>
    )
}

export default Search;