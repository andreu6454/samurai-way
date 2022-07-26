import React from 'react';
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img height="200px" width="1100px" src={"https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"} alt={"content-header"}/>
            </div>
            <div className={style.DescriptionBlock}>
                <img width="150px" src={"https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"} alt={"avatar"}/>
            </div>
        </div>
    );
};

export default ProfileInfo;