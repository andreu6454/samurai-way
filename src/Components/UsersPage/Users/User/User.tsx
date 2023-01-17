import React from 'react';
import style from './User.module.css'
import {UserType} from "../../../../Redux/Types";
import {useDispatch} from "react-redux";
import {followAC, unFollowAC} from "../../../../Redux/Reducers/usersPageReducer";
import {NavLink} from "react-router-dom";
import {followApi} from "../../../../Api/follow-api";

type UserPropsType = {
    user: UserType
}
const User = ({user}: UserPropsType) => {
    const dispatch = useDispatch()
    const altPhoto = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"

    const onClickHandler = () => {
        if (user.followed) {
            followApi.unFollow(user.id).then((res)=>{
                if(res.data.resultCode === 0){
                    dispatch(unFollowAC(user.id))
                }
            })
        } else {
            followApi.follow(user.id).then((res)=>{
                if(res.data.resultCode === 0){
                    dispatch(followAC(user.id))
                }
            })
        }
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
                        className={style.followButton}>{user.followed ? "Unfollow" : "Follow"}</button>
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