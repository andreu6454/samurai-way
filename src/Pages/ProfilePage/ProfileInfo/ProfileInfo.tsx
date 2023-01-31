import React, {useState} from 'react';
import style from "./ProfileInfo.module.css"
import {useAppSelector} from "../../../Redux/ReduxState";
import {profileInfoResponseType} from "../../../Api/users-api";
import ProfileStatus from "./ProfileStatus";
import Avatar from "./Avatar/Avatar";
import ProfileEditBlock from "./ProfileEdit/ProfileEditBlock";

const ProfileInfo = () => {
    const {
        fullName,
        aboutMe,
        lookingForAJob,
        photos,
        lookingForAJobDescription
    } = useAppSelector<profileInfoResponseType>(state => state.ProfilePage.userProfile)

    const status = useAppSelector(state => state.ProfilePage.status)
    const login = useAppSelector(state => state.auth.login)

    const [profileEditable, setProfileEditable] = useState(false)

    const changeProfileInfoHandle = () => {
        setProfileEditable(!profileEditable)
    }

    return (
        <div className={style.ProfileBlock}>
            <Avatar profilePhoto={photos.large}/>
            {profileEditable ?
                <ProfileEditBlock setProfileEditable={setProfileEditable}/> :
                <>
                    <div className={style.DescriptionBlock}>
                        <div className={style.MainName}>
                            {fullName}
                        </div>
                        <div className={style.Login}>
                            {login !== fullName && login}
                        </div>
                        {status &&
                            <div className={style.ProfileStatus}>
                                <ProfileStatus/>
                            </div>
                        }
                        {/*вынести в отдельный файл*/}
                        <div className={style.ProfileDescription}>
                            <div className={style.descriptionItem}>
                                About me:
                                {aboutMe && " " + aboutMe}
                            </div>
                            <div className={style.descriptionItem}>
                                Looking for a job:
                                {lookingForAJob && lookingForAJob ? " yes" :" no"}
                            </div>
                            <div className={style.descriptionItem}>
                                My skills:
                                {lookingForAJobDescription && " " + lookingForAJobDescription}
                            </div>
                        </div>
                    </div>
                    <button className={style.EditButton} onClick={changeProfileInfoHandle}> Edit Profile</button>
                </>
            }
        </div>
    );
};

export default ProfileInfo;