import React from 'react';

import Email from "../../2ndPart/email2/email2.component";

import "./mail.styles.scss";

const Mail =()=>{
    return(
        <div className="mail">
            <h2>Join our mailing list</h2>
            <p>Recieve 15% off your order at checkout and save today!</p>
            <div className="email">
                <Email/>
                <button className="btn">&#8594;</button>
            </div>
        </div>
    )
}

export default Mail;