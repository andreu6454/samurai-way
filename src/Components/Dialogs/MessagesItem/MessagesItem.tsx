import React from 'react';
import style from "./MessagesItem.module.css"

type MessagesItemType = {
    message: string
}

const MessagesItem = (props:MessagesItemType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
};

export default MessagesItem;