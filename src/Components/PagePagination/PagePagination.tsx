import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";
import {UsersPageType} from "../../Redux/Types";
import {setCurrentPageAC} from "../../Redux/Reducers/usersPageReducer";
import {v1} from "uuid";
import style from "./PagePagination.module.css";

const PagePagination = () => {
    const dispatch = useDispatch()
    const {
        pageSize,
        totalUsersCount,
        currentPage
    } = useSelector<AppRootStateType, UsersPageType>(state => state.UsersPage)

    const pagesCount = totalUsersCount / pageSize

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
        <div className={style.pagination}>
            {pagePagination}
        </div>
    );
};

export default PagePagination;