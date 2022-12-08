import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UserType} from "../../Redux/Types";
import User from "./User/User";
import {userApi} from "../../Api/user-api";
import {setUsersAC} from "../../Redux/Reducers/usersPageReducer";
import {v1} from "uuid";

const UsersPage = () => {
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.UsersPage.users)
    const dispatch = useDispatch()

    useEffect(() => {
        userApi.getUsers().then(
            (res) => {
                dispatch(setUsersAC(res.data.items))
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

    let mappedUsers = users.map((user) => {
        return <User user={user} key={v1()}/>
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