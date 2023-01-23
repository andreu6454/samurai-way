import React from 'react';
import style from "./ProfileInfo.module.css"
import {useAppSelector} from "../../../Redux/ReduxState";
import {profileInfoResponseType} from "../../../Api/users-api";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = () => {
    const profileInfo = useAppSelector<profileInfoResponseType>(state => state.ProfilePage.userProfile)
    const login = useAppSelector(state => state.auth.login)

    return (
        <div className={style.ProfileBlock}>
            <img
                className={style.AvatarBlock}
                src={profileInfo.photos.small ? profileInfo.photos.small : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"}
                alt={"avatar"}/>
            <div className={style.DescriptionBlock}>
                <div className={style.MainName}>
                    {profileInfo.fullName}
                </div>
                <div className={style.Login}>
                    {login !== profileInfo.fullName && login}
                </div>
                <div className={style.ProfileDescription}>
                    <ProfileStatus/>
                </div>
            </div>
            <button className={style.EditButton}> Edit Profile</button>
        </div>
    );
};

export default ProfileInfo;