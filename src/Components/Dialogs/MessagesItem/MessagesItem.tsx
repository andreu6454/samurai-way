import React from 'react';
import style from "./MessagesItem.module.css"

type MessagesItemType = {
    id: number,
    userId: number,
    userAvatar: string,
    message: string
}

const MessagesItem = (props: MessagesItemType) => {

    return (
        <div className={style.message}>
            <img src={props.userAvatar} className={style.userAvatar} alt={"avatar"}/>
            <div className={style.textBlock}>{props.message}</div>
        </div>
    );
};

export default MessagesItem;