import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {usersApi} from "../../Api/users-api";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../Redux/Reducers/usersPageReducer";
import {v1} from "uuid";
import {setIsLoadingAC} from "../../Redux/Reducers/appReducer";
import Users from "./Users/Users";
import PreLoader from "../../Items/PreLoader/PreLoader";

const UsersPage = () => {
    const {
        pageSize,
        totalUsersCount,
        currentPage
    } = useSelector<AppRootStateType, UsersPageType>(state => state.UsersPage)
    const isLoading = useSelector<AppRootStateType>(state => state.app.isLoading)

    const pagesCount = totalUsersCount / pageSize
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoadingAC(true))
        usersApi.getUsers()
            .then(
                (res) => {
                    dispatch(setIsLoadingAC(false))
                    dispatch(setUsersAC(res.data.items))
                    dispatch(setTotalUsersCountAC(res.data.totalCount))
                })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        dispatch(setIsLoadingAC(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(
                res => {
                    dispatch(setIsLoadingAC(false))
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

        if (p > 10 && p !== pages.length) {
            return
        }
        if (p === pages.length) {
            return <div
                key={v1()}
                className={p === currentPage ? style.selectedPage : style.page}
                onClick={changePageHandle}
            >{'... ' + p} </div>
        }
        return <div
            key={v1()}
            className={p === currentPage ? style.selectedPage : style.page}
            onClick={changePageHandle}
        > {p} </div>
    })


    return (
        <div className={style.userPage}>
            <div className={style.title}>
                Users:
            </div>
            {isLoading ?
                <PreLoader/>
                :
                <>
                    <Users/>
                    <div className={style.pagination}>
                        {pagePagination}
                    </div>
                </>}
        </div>
    );
};

export default UsersPage;