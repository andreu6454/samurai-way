import React from 'react';
import style from './UsersPage.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UserType} from "../../Redux/Types";
import User from "./User/User";

const UsersPage = () => {
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.UsersPage.users)

    let mappedUsers = users.map((user)=> {
        return <User user={user}></User>
    })
    return (
        <div className={style.userPage}>
            <div className={style.title}>
                Users:
            </div>
            <div className={style.usersContainer}>
                {mappedUsers}
            </div>

        </div>
    );
};

export default UsersPage;