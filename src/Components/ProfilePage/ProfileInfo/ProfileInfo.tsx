import React from 'react';
import style from "./ProfileInfo.module.css"
import {useAppSelector} from "../../../Redux/ReduxState";
import {profileInfoResponseType} from "../../../Api/users-api";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = () => {
    const profileInfo = useAppSelector<profileInfoResponseType>(state => state.ProfilePage.userProfile)

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
                                <ProfileStatus/>
                            </div>
                        </div>
                    </div>
                    <div className={style.OnlineStatus}>
                        online
                        <div className={style.OnlineStatusActive}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;