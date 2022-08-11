import React from 'react';
import style from "./FriendsAddBlock.module.css"

const FriendsAddBlock = () => {
    return (
        <div className={style.FriendsAddBlock}>
            <div className={style.title}> Friend requests</div>
            <div className={style.content}>
                <div> Friend requests 1 </div>
                <div> Friend requests 2 </div>
                <div> Friend requests 3 </div>
            </div>
        </div>
    );
};

export default FriendsAddBlock;