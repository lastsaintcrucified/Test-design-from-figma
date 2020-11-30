import React from 'react';

import olive from "../../../resources/Olive Leaves.png";
import "./sale.styles.scss"

const Sale =()=>{
    return(
        <div className="sale">
            <div className="para">
                <h1>Summer Sale</h1>
                <p>25% Off Now through sunday for all in-store purchases.</p>
                <button className="btn">Shop Now</button>
            </div>
            <div className="pic">
            </div>
        </div>
    )
}

export default Sale;