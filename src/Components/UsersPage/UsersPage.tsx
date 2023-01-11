import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UsersPageType, UserType} from "../../Redux/Types";
import User from "./User/User";
import {usersApi} from "../../Api/users-api";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../Redux/Reducers/usersPageReducer";
import {v1} from "uuid";

const UsersPage = () => {
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.UsersPage.users)
    const {
        pageSize,
        totalUsersCount,
        currentPage
    } = useSelector<AppRootStateType, UsersPageType>(state => state.UsersPage)

    const pagesCount = totalUsersCount / pageSize
    const dispatch = useDispatch()

    useEffect(() => {
        usersApi.getUsers()
            .then(
                (res) => {
                    dispatch(setUsersAC(res.data.items))
                    dispatch(setTotalUsersCountAC(res.data.totalCount))
                })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        usersApi.getUsers(currentPage, pageSize)
            .then(
                res => {
                    dispatch(setUsersAC(res.data.items))
                }
            )
            .catch((error) => {
                console.log(error)
            })
    }, [currentPage, pageSize])

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pagePagination = pages.map((p) => {
        const changePageHandle = () => {
            dispatch(setCurrentPageAC(p))
        }

        if(p > 10 && p !== pages.length){
            return
        }
        if(p === pages.length){
            return <div
                key={v1()}
                className={p === currentPage ? style.selectedPage : style.page}
                onClick={changePageHandle}
            >{'...' + p} </div>
        }
        return <div
            key={v1()}
            className={p === currentPage ? style.selectedPage : style.page}
            onClick={changePageHandle}
        > {p} </div>
    })

    const mappedUsers = users.map((user) => {
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
            <div className={style.pagination}>
                {pagePagination}
            </div>
        </div>
    );
};

export default UsersPage;