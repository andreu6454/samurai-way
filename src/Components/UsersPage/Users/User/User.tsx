import React from 'react';
import style from './User.module.css'
import {UserType} from "../../../../Redux/Types";
import {useDispatch, useSelector} from "react-redux";
import {followTC} from "../../../../Redux/Reducers/usersPageReducer";
import {NavLink} from "react-router-dom";
import {AppRootStateType} from "../../../../Redux/ReduxState";

type UserPropsType = {
    user: UserType
}
const User = ({user}: UserPropsType) => {
    const dispatch = useDispatch()
    const altPhoto = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.UsersPage.isDisabled)

    const onClickHandler = () => {
        dispatch(followTC(user.followed, user.id))
    }

    return (
        <div className={style.user}>
            <span className={style.leftBlock}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : altPhoto} alt={"Avatar"}
                             className={style.avatar}/>
                    </NavLink>
                </div>
                <button onClick={onClickHandler}
                        className={style.followButton}
                        disabled={isDisabled}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </button>
            </span>
            <div className={style.rightBlock}>
                <div className={style.nameBlock}>
                    <div className={style.fullName}>{user.name} </div>
                    <div className={style.status}>{user.status}</div>
                </div>
                <div className={style.locationBlock}>
                    <div>Country</div>
                    <div>City</div>
                </div>
            </div>
        </div>
    );
};

export default User;