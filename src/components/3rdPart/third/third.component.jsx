import React from 'react';
import Select from "../select/select.component";
import Other from "../otherPart/other/other.component";

import "./third.styles.scss";
const Third = () =>{
    return (
        <div className="third">
            <Select className="t1"/>
            <Other className="t2"/>
        </div>
    )
}

export default Third;