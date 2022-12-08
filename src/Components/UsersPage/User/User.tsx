import React from 'react';
import style from './User.module.css'
import {UserType} from "../../../Redux/Types";
import {useDispatch} from "react-redux";
import {followAC, unFollowAC} from "../../../Redux/Reducers/usersPageReducer";

type UserPropsType = {
    user: UserType
}
const User = ({user}: UserPropsType) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        user.followed? dispatch(unFollowAC(user.id)) : dispatch(followAC(user.id))
    }
    return (
        <div className={style.user}>
            <span className={style.leftBlock}>
                <div>
                    <img src={user.photoUrl} alt={"Avatar"} className={style.avatar}/>
                </div>
                <button onClick={onClickHandler} className={style.followButton}>{user.followed? "Unfollow": "Follow"}</button>
            </span>
            <div className={style.rightBlock}>
                <div className={style.nameBlock}>
                    <div className={style.fullName}>{user.fullName} </div>
                    <div className={style.status}>{user.status}</div>
                </div>
                <div className={style.locationBlock}>
                    <div>{user.location.country}, </div>
                    <div>{user.location.city} </div>
                </div>
            </div>
        </div>
    );
};

export default User;