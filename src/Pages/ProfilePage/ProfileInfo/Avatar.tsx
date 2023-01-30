import React, {useState} from 'react';
import style from "./Avatar.module.css";
import {UploadFileWrapper} from "../../../Components/UploadFileWrapper/UploadFileWrapper";
import {useDispatch} from "react-redux";
import {changeUserAvatarTC} from "../../../Redux/Reducers/profilePageReducer";

type AvatarPropsType = {
    profilePhoto: string
}
const Avatar = ({profilePhoto}: AvatarPropsType) => {
    const [isHover, setIsHover] = useState(false)

    const dispatch = useDispatch()
    const avatarSuggestionHandle = () => {
        setIsHover(!isHover)
    }
    const changeAvatarHandle = (file: File) => {
        dispatch(changeUserAvatarTC(file))
    }
    return (
        <div className={isHover ? style.ChangeAvatarSuggestion : style.AvatarBlock}>
            <UploadFileWrapper callback={changeAvatarHandle}>
                {!profilePhoto ?
                    <div className={style.avatarZone}>
                        <span>
                            Your avatar should be here
                        </span>
                        <span>
                             click here to upload photo
                        </span>
                    </div>:
                    <img
                        className={style.Avatar}
                        src={profilePhoto}
                        alt={"avatar"} onMouseEnter={avatarSuggestionHandle} onMouseLeave={avatarSuggestionHandle}/>
                }
            </UploadFileWrapper>
        </div>
    );
};

export default Avatar;