import React, {useEffect} from 'react';
import style from './UserModal.module.css'
import {useAppSelector} from "../../Redux/ReduxState";
import {useDispatch} from "react-redux";
import {followUserTC, setModalOpenAC, setUserStatusTC} from "../../Redux/Reducers/UserModalReducer";
import {useSearchParams} from 'react-router-dom';


const UserModal = () => {
    const {large} = useAppSelector(state => state.UserPage.userInfo.photos)
    const {
        fullName,
        lookingForAJob,
        contacts,
        lookingForAJobDescription,
        aboutMe
    } = useAppSelector(state => state.UserPage.userInfo)
    const {status, isFollowing, isDisabled, isOpen} = useAppSelector(state => state.UserPage)
    const [searchParams, setSearchParams] = useSearchParams()

    const altPhoto = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
    const userId = searchParams.get('userId')

    const dispatch = useDispatch()

    useEffect(() => {
        if(Number(userId) !== 0){
            dispatch(setUserStatusTC(Number(userId)))
        }
    }, [userId])

    const onClickHandler = () => {
        setSearchParams({})
        dispatch(setModalOpenAC(false))
    }
    const followHandle = () => {
        dispatch(followUserTC(isFollowing, Number(userId)))
    }

    return (
        <div className={isOpen ? style.modalActive : style.modal} onClick={onClickHandler}>
            <div className={isOpen ? style.modalContentActive : style.modalContent}
                 onClick={(e) => e.stopPropagation()}>
                <div className={style.container}>
                    <div className={style.avatarContainer}>
                        <img src={large ? large : altPhoto} alt="avatar" className={style.avatar}/>
                        <button onClick={followHandle}
                                disabled={isDisabled}
                                className={style.followButton}> {isFollowing ? "unfollow" : "follow"} </button>
                    </div>
                    <div className={style.description}>
                        <div className={style.fullName}>
                            {"Имя: " + fullName}
                        </div>
                        <div>
                            {"Обо мне: " + (aboutMe === null? "Не указано" : aboutMe)}
                        </div>
                        <div className={style.status}>
                            {"Статус: " + (status === null? "Не указано" : status)}
                        </div>
                        <div>
                            {lookingForAJob}
                        </div>
                        <div>
                            {lookingForAJobDescription}
                        </div>
                        {/*надо переделать*/}
                        <div className={style.Links}>
                            <div className={style.item}>
                                {contacts.twitter}
                            </div>
                            <div className={style.item}>
                                {contacts.instagram}
                            </div>
                            <div className={style.item}>
                                {contacts.vk}
                            </div>
                            <div className={style.item}>
                                {contacts.github}
                            </div>
                            <div className={style.item}>
                                {contacts.mainLink}
                            </div>
                            <div className={style.item}>
                                {contacts.youtube}
                            </div>
                        </div>
                        {/*надо переделать*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
