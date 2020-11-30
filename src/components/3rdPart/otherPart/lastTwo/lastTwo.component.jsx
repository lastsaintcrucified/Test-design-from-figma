import React,{useState} from "react";
import {AiOutlineTags} from "react-icons/ai";

import Watch from "../watch/watch.component";
import SignUp from "../signUp/signUp.component";
import Picture from "../picture/picture.component";

import "./lastTwo.styles.scss";

const LastTwo =()=>{
    const [number,setNumber] = useState(1);
    const minus =()=>{
        if(number>0){
            setNumber(number-1)
        }
    }
    const plus =()=>{
        if(number>=0){
            setNumber(number+1)
        }
    }
    return(
        <div className="lastTwo">
            <div className="leftD">
                <Watch/>
                <SignUp/>
                <Picture/>
            </div>
            <div className="rightD">
                <div className="img"></div>
                <h2>Waffle Cone<br/><span>12-pack Box</span></h2>
                <div className="lastDiv">
                    <div className="calc">
                        <span className="pm" onClick={minus}>&#45;</span>
                        <span className="nmbr">{number}</span>
                        <span className="pm" onClick={plus}>&#43;</span>
                    </div>
                    <span className="dsrt"><AiOutlineTags/>Dessert</span>
                </div>
            </div>
        </div>
    )
}

export default LastTwo;