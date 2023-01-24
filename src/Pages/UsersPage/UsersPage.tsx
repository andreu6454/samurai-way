import React, {useEffect} from 'react';
import style from './UsersPage.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {
    setCurrentPageAC,
    setCurrentPageUsersTc,
    setPageSizeAC,
    setUsersTC
} from "../../Redux/Reducers/usersPageReducer";
import Users from "./Users/Users";
import {FormControl, MenuItem, Pagination, Select, SelectChangeEvent} from "@mui/material";
import UserModal from "../../Components/UserModal/UserModal";

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
    const changePageSizeHandle = (e: SelectChangeEvent) => {
        dispatch(setPageSizeAC(Number(e.target.value)))
    }
    return (
        <div className={style.userPage}>
            <div className={style.title}>
                Users:
            </div>
            <Users/>
            <div className={style.Container}>
                <Pagination color={"primary"} className={style.Pagination} page={currentPage}
                            onChange={pageChangeHandle}
                            count={totalPagesCount}
                            shape="rounded"/>
                User per page:
                <FormControl>
                    <Select
                        sx={{ml: 1}}
                        id="pageSizeSelect"
                        value={String(pageSize)}
                        onChange={changePageSizeHandle}
                    >
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <UserModal/>
        </div>
    );
};

export default UsersPage;