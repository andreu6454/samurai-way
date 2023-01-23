import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {setCurrentPageAC, setCurrentPageUsersTc, setUsersTC} from "../../Redux/Reducers/usersPageReducer";
import Users from "./Users/Users";
import {Pagination} from "@mui/material";

const UsersPage = () => {
    const {
        pageSize,
        currentPage,
        totalUsersCount
    } = useAppSelector<UsersPageType>(state => state.UsersPage)
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersTC())
    }, [])

    useEffect(() => {
        dispatch(setCurrentPageUsersTc(currentPage, pageSize))
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