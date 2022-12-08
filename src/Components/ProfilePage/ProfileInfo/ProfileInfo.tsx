import React from 'react';
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={style.ProfileBlock}>
            <div className={style.AvatarBlock}>
                <img width="150px" src={"https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"} alt={"avatar"}/>
            </div>
            <div>
                <div className={style.ProfileInfo}>
                    <div className={style.DescriptionBlock}>
                        <div>
                            <div className={style.MainName}>
                                Andrey Malin
                            </div>
                            <div className={style.ProfileDescription}>
                                <div className={style.DescriptionPoints}>
                                    <div className={style.Item}> Date of birth:</div>
                                    <div className={style.Item}> City:</div>
                                    <div className={style.Item}> GitHub:</div>
                                </div>
                                <div>
                                    <div className={style.Item}> 09.12.2001 </div>
                                    <div className={style.Item}> Saint-Petersburg </div>
                                    <div className={style.Item}> andreu6454 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.OnlineStatus}>
                        online
                        <div className={style.OnlineStatusActive}></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;