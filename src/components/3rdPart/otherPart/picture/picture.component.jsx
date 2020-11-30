import React from 'react';
import im1 from "../../../../resources/F (3).png";
import im2 from "../../../../resources/yzx.png";
import im3 from "../../../../resources/F (1).png";
import im4 from "../../../../resources/xcx.png";

import "./picture.styles.scss";

const Picture =()=>{
    return(
        <div className="picture">
            <img src={im1} className="im1" alt="im1"/>
            <img src={im2} className="im2" alt="im2"/>
            <img src={im3} className="im3" alt="im3"/>
            <img src={im4} className="im4" alt="im4"/>
        </div>
    )
}

export default Picture;