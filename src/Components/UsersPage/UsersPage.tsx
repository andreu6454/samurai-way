import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {usersApi} from "../../Api/users-api";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../Redux/Reducers/usersPageReducer";
import Users from "./Users/Users";
import {Pagination} from "@mui/material";

const UsersPage = () => {
    const {
        pageSize,
        currentPage,
        totalUsersCount
    } = useSelector<AppRootStateType, UsersPageType>(state => state.UsersPage)
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)

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

    const pageChangeHandle = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    return (
        <div className={style.userPage}>
            <div className={style.title}>
                Users:
            </div>
            <Users/>
            <Pagination page={currentPage} onChange={pageChangeHandle} sx={{mt: 3}} count={totalPagesCount}
                        shape="rounded"/>
        </div>
    );
};

export default UsersPage;