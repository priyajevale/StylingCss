import React from 'react';
import './button.css';
const button = props => {
return (
    <button type={props.type} className= "button" onClick={props.onClick}>
        {props.children}
    </button>
);

};
export default button;