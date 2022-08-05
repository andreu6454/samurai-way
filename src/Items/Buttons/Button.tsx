import React from 'react';
import style from "./Button.module.css"

type ButtonPropsType = {
    buttonName:string
    buttonFunction: () => void
}

const Button = (props:ButtonPropsType) => {
    return (
        <button onClick={props.buttonFunction} className={style.Button}>{props.buttonName}</button>
    );
};

export default Button;