import React from 'react';
import Search from "../search/search.component";
import LastTwo from "../lastTwo/lastTwo.component";

import "./other.styles.scss";

const Other = () =>{
    return(
        <div className="other">
            <Search/>
            <LastTwo/>
        </div>
    )
}
export default Other;