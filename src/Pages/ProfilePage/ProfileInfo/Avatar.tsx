import React, {useState} from 'react';
import style from "./Avatar.module.css";
import {UploadFileWrapper} from "../../../Components/UploadFileWrapper/UploadFileWrapper";
import {useDispatch} from "react-redux";
import {changeUserAvatarTC} from "../../../Redux/Reducers/profilePageReducer";

type AvatarPropsType = {
    profilePhoto: string
}
const Avatar = ({profilePhoto}: AvatarPropsType) => {
    const [isHover,setIsHover] = useState(false)

    const dispatch = useDispatch()
    const avatarSuggestionHandle = () => {
        setIsHover(!isHover)
    }
    const changeAvatarHandle = (file: File) => {
        dispatch(changeUserAvatarTC(file))
    }
    return (
        <div className={isHover? style.ChangeAvatarSuggestion : style.AvatarBlock}>
            <UploadFileWrapper callback={changeAvatarHandle}>
                <img
                    src={profilePhoto ? profilePhoto : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"}
                    alt={"avatar"} onMouseEnter={avatarSuggestionHandle} onMouseLeave={avatarSuggestionHandle}/>
            </UploadFileWrapper>
        </div>
    );
};

export default Avatar;