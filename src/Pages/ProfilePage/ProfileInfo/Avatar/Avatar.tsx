import React, {memo, useEffect, useState} from 'react';
import style from "./Avatar.module.css";
import {UploadFileWrapper} from "../../../../Components/UploadFileWrapper/UploadFileWrapper";
import {useDispatch} from "react-redux";
import {changeUserAvatarTC} from "../../../../Redux/Reducers/profilePageReducer";
import {useInView} from "react-intersection-observer";
import {setAvatarVisibleAC} from "../../../../Redux/Reducers/appReducer";

type AvatarPropsType = {
    profilePhoto: string
}
const Avatar = memo(({profilePhoto}: AvatarPropsType) => {
    const [isHover, setIsHover] = useState(false)
    const [renderCount, setRenderCount] = useState(0)
    const [ref, inView] = useInView({
        threshold: 0.01
    })

    const dispatch = useDispatch()

    const avatarSuggestionHandle = () => {
        setIsHover(!isHover)
    }
    const changeAvatarHandle = (file: File) => {
        dispatch(changeUserAvatarTC(file))
    }

    useEffect(() => {
        const newRenderCount = renderCount + 1
        setRenderCount(newRenderCount)
        if (renderCount > 1) {
            dispatch(setAvatarVisibleAC(inView))
        }
        return () => {
            dispatch(setAvatarVisibleAC(true))
        }
    }, [inView])

    return (
        <div className={isHover ? style.ChangeAvatarSuggestion : style.AvatarBlock} ref={ref}>
            <UploadFileWrapper callback={changeAvatarHandle}>
                {!profilePhoto ?
                    <div className={style.avatarZone}>
                        <span>
                            Your avatar should be here
                        </span>
                        <span>
                             click here to upload photo
                        </span>
                    </div> :
                    <img

                        className={style.Avatar}
                        src={profilePhoto}
                        alt={"avatar"} onMouseEnter={avatarSuggestionHandle} onMouseLeave={avatarSuggestionHandle}/>
                }
            </UploadFileWrapper>
        </div>
    );
});

export default Avatar;