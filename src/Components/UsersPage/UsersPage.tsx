import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {usersApi} from "../../Api/users-api";
import {setTotalUsersCountAC, setUsersAC} from "../../Redux/Reducers/usersPageReducer";
import {setIsLoadingAC} from "../../Redux/Reducers/appReducer";
import Users from "./Users/Users";
import PreLoader from "../../Items/PreLoader/PreLoader";
import PagePagination from "../PagePagination/PagePagination";

const UsersPage = () => {
    const {
        pageSize,
        currentPage
    } = useSelector<AppRootStateType, UsersPageType>(state => state.UsersPage)
    const isLoading = useSelector<AppRootStateType>(state => state.app.isLoading)


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
                    <PagePagination/>
                </>}
        </div>
    );
};

export default UsersPage;