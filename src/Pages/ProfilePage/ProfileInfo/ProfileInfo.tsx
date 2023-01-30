import React from 'react';
import style from "./ProfileInfo.module.css"
import {useAppSelector} from "../../../Redux/ReduxState";
import {profileInfoResponseType} from "../../../Api/users-api";
import ProfileStatus from "./ProfileStatus";
import Avatar from "./Avatar/Avatar";

const ProfileInfo = () => {
    const profileInfo = useAppSelector<profileInfoResponseType>(state => state.ProfilePage.userProfile)
    const status = useAppSelector(state => state.ProfilePage.status)
    const login = useAppSelector(state => state.auth.login)

    return (
        <div className={style.ProfileBlock}>
            <Avatar profilePhoto={profileInfo.photos.large}/>
            <div className={style.DescriptionBlock}>
                <div className={style.MainName}>
                    {profileInfo.fullName}
                </div>
                <div className={style.Login}>
                    {login !== profileInfo.fullName && login}
                </div>
                {status &&
                    <div className={style.ProfileDescription}>
                        <ProfileStatus/>
                    </div>
                }
            </div>
            <button className={style.EditButton}> Edit Profile</button>
        </div>
    );
};

export default ProfileInfo;