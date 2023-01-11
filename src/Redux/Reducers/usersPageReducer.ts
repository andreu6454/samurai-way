import {UsersPageType, UserType} from "../Types";


const initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 3
} as UsersPageType

type usersPageReducerActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | setPageSizeACType
    | setCurrentPageACType
    | setTotalUsersCountACType
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
        default:
            return state
    }
}

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

