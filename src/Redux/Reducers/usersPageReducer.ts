import {UsersPageType, UserType} from "../Types";
import {Dispatch} from "redux";
import {usersApi} from "../../Api/users-api";
import {followApi} from "../../Api/follow-api";


const initialState = {
    users: [] as UserType[],
    pageSize: 12,
    totalUsersCount: 20,
    currentPage: 1,
    isDisabled: false,
    isLoading: false
} as UsersPageType

type usersPageReducerActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | setPageSizeACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsDisabledACType
    | setIsLoadingACType
export const usersPageReducer = (state: UsersPageType = initialState, action: usersPageReducerActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsers}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-PAGE-SIZE":
            return {...state, pageSize: action.pageSize}
        case "SET-IS-DISABLED":
            return {...state, isDisabled: action.isDisabled}
        case "SET-USERS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

///////// Reducers
export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export type FollowACType = ReturnType<typeof followAC>

export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export type UnFollowACType = ReturnType<typeof unFollowAC>

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export type SetUsersACType = ReturnType<typeof setUsersAC>

export const setPageSizeAC = (pageSize: number) => {
    return {
        type: "SET-PAGE-SIZE",
        pageSize
    } as const
}
export type setPageSizeACType = ReturnType<typeof setPageSizeAC>

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setTotalUsersCountAC = (totalUsers: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsers
    } as const
}
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const setIsDisabledAC = (isDisabled: boolean) => {
    return {
        type: "SET-IS-DISABLED",
        isDisabled
    } as const
}
export type setIsDisabledACType = ReturnType<typeof setIsDisabledAC>

export const setUsersLoadingAC = (isLoading: boolean) => {
    return {
        type: "SET-USERS-LOADING",
        isLoading
    } as const
}
export type setIsLoadingACType = ReturnType<typeof setUsersLoadingAC>

///////// Thunks

export const setUsersTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setUsersLoadingAC(true))
        usersApi.getUsers()
            .then(
                (res) => {
                    dispatch(setUsersLoadingAC(false))
                    dispatch(setUsersAC(res.data.items))
                    dispatch(setTotalUsersCountAC(res.data.totalCount))
                })
            .catch((error) => {
                dispatch(setUsersLoadingAC(false))
                console.log(error)
            })
    }
}

export const setCurrentPageUsersTc = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        usersApi.getUsers(currentPage, pageSize)
            .then(
                res => {
                    dispatch(setUsersAC(res.data.items))
                }
            )
            .catch((error) => {
                console.log(error)
            })
    }
}


export const followTC = (followed: boolean, userId: number) => {
    return (dispatch: Dispatch) => {
        if (followed) {
            dispatch(setIsDisabledAC(true))
            followApi.unFollow(userId).then((res) => {
                dispatch(setIsDisabledAC(false))
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
            }).catch(() => {
                dispatch(setIsDisabledAC(false))
            })
        } else {
            dispatch(setIsDisabledAC(true))
            followApi.follow(userId).then((res) => {
                dispatch(setIsDisabledAC(false))
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            }).catch(() => {
                dispatch(setIsDisabledAC(false))
            })
        }
    }
}