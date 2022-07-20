import React from 'react';
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.appContent}>
            <div>
                <img height="250px" src={"https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"} alt={"content-header"}/>
            </div>
            <div>
                <img width="150px" src={"https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"} alt={"avatar"}/>
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    Poos1
                </div>
                <div>
                    Post2
                </div>
            </div>
        </div>
    );
};

export default Profile;