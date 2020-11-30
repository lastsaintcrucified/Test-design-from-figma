import React,{useEffect,useState} from 'react';
import Slider from 'react-rangeslider';

import "./buttonGroup.styles.scss";

const ButtonGroup =()=>{
    const [number,setNumber] = useState(1);
    const[value,setValue] = useState(10);
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
    const handleChangeStart = () => {
        console.log('Change event started')
      };
    
    const handleChange = value => {
        setValue(value)
      };
    const  handleChangeComplete = () => {
        console.log('Change event completed')
      };
    return(
        <div className="btnGrp">
           <div className="radio">
                <div className="tick">
                    <label className="lbl">
                        <input type="radio" name="radio1" />
                        <span class="checkmark">&#10003;</span>
                    </label>
                    <label className="lbl">
                            <input type="radio" name="radio1" />
                            <span class="checkmark">&#10003;</span>
                    </label>
                </div>
                <div className="tick2">
                    <label className="container">
                        <input type="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    <label className="container">
                        <input type="radio"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
           </div>
            <div className="onOff">
                <div className="toggle">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div className="calc">
                    <span className="pm" onClick={minus}>&#45;</span>
                    <span className="nmbr">{number}</span>
                    <span className="pm" onClick={plus}>&#43;</span>
                </div>
            </div>
            
                <Slider
                    min={0}
                    max={100}
                    value={value}
                    onChangeStart={handleChangeStart}
                    onChange={handleChange}
                    onChangeComplete={handleChangeComplete}
                />
            
        </div>
    )
}

export default ButtonGroup;