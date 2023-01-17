import React from 'react';
import style from "./ProfileInfo.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/ReduxState";
import {profileInfoResponseType} from "../../../Api/users-api";

const ProfileInfo = () => {
    const profileInfo = useSelector<AppRootStateType, profileInfoResponseType>(state => state.ProfilePage.userProfile)

    return (
        <div className={style.ProfileBlock}>
            <div className={style.AvatarBlock}>
                <img width="150px"
                     src={profileInfo.photos.small ? profileInfo.photos.small : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"}
                     alt={"avatar"}/>
            </div>
            <div>
                <div className={style.ProfileInfo}>
                    <div className={style.DescriptionBlock}>
                        <div>
                            <div className={style.MainName}>
                                {profileInfo.fullName}
                            </div>
                            <div className={style.ProfileDescription}>
                                <div className={style.DescriptionPoints}>
                                    <div className={style.Item}> Date of birth:</div>
                                    <div className={style.Item}> About me:</div>
                                    <div className={style.Item}> GitHub:</div>
                                </div>
                                <div>
                                    <div className={style.Item}> 09.12.2001</div>
                                    <div className={style.Item}> {profileInfo.aboutMe? profileInfo.aboutMe : "about me" }</div>
                                    <div className={style.Item}> {profileInfo.contacts.github? profileInfo.contacts.github : "andreu6454"}</div>
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