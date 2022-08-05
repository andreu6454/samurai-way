import React from 'react';
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.DescriptionBlock}>
                <img width="150px" src={"https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"} alt={"avatar"}/>
            </div>
        </div>
    );
};

export default ProfileInfo;