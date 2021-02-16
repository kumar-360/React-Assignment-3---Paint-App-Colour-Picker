import React,{useState} from 'react';
import "../styles/Child.css";
//import "../styles/App.css";

const Selection = (props) => {
    const [color,setColor]=useState({background:""});

    // const handleClick=()={

    // }
    return (
        <div style={color} className="fix-box"  onClick={()=>props.applyColor(setColor)}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
