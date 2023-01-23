import React from 'react';
import style from "./Users.module.css";
import User from "./User/User";
import {v1} from "uuid";
import {useAppSelector} from "../../../Redux/ReduxState";
import {UserType} from "../../../Redux/Types";

const Users = () => {
    const users = useAppSelector<Array<UserType>>(state => state.UsersPage.users)
    
    const mappedUsers = users.map((user) => {
        return <User user={user} key={v1()}/>
    })
    return (
        <div className={style.usersContainer}>
            {mappedUsers}
        </div>
    );
};

export default Users;