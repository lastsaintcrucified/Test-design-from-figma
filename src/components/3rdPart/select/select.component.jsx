import React,{useState} from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import "./select.styles.scss";

const Select =() =>{
    const [selectClass,setSelectClass] = useState("")
    const options = [
        'Vegetables','Turnips', 'Squash', 'Broccoli','Spinach'
      ]
      const defaultOption = options[0];
      const handleChange = () =>{
          if(selectClass===""){
              setSelectClass("greyClr")
          }else{
            setSelectClass("")
          }
      }
    return(
        <div className="select">
            <div className="slctd">
                <p align="center" className={`${selectClass}`}>Selected<br/><span>.</span></p>
                <p align="center" >Unselected<br/><span>.</span></p>
            </div>
            <div className="txt">
                <textarea placeholder="Share a reply" id="w3review" name="w3review" rows="7" cols="30"/>
            </div>
            <div className="drp">
                <Dropdown className="drpCnt" onChange={handleChange} options={options} value={defaultOption} placeholder="Vegetables" />
                <Dropdown className="drpCnt" onChange={handleChange} options={options} value={defaultOption} placeholder="Vegetables" />
            </div>
        </div>
    )
}

export default Select;