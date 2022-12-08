import {InitialState} from "../InitialState";
import {UsersPageType, UserType} from "../Types";

const initialState = InitialState.UsersPage

type usersPageReducerActionType = FollowACType | UnFollowACType | SetUsersACType
export const usersPageReducer = (state: UsersPageType = initialState, action: usersPageReducerActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map((user)=>{
                if(user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user
            })}
        case "UNFOLLOW":
            return {...state, users: state.users.map((user)=>{
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })}
        case "SET-USERS":
            return {...state, users: action.users}
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

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export type SetUsersACType = ReturnType<typeof setUsers>
