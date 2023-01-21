import {PostsDataType, ProfilePageDataType} from "../Types";
import {v1} from "uuid";
import {InitialState} from "../InitialState";
import {profileInfoResponseType} from "../../Api/users-api";
import {setIsLoadingAC} from "./appReducer";
import {Dispatch} from "redux";
import {profileApi} from "../../Api/profile-api";

const initialState = InitialState.ProfilePage

type ProfilePageReducerType = addPostsACType | setUserProfileACType | changeUserStatusACType | setUserStatusACType

export const profilePageReducer = (state: ProfilePageDataType = initialState, action: ProfilePageReducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.post,
                likesCount: 0
            }
            return {...state, PostsData: [newPost, ...state.PostsData]};
        }
        case "SET-USER-PROFILE": {
            return {...state, userProfile: action.user}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "CHANGE-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

///////// Reducers

export const addPostsAC = (post: string) => {
    return {
        type: "ADD-POST",
        payload: {
            post
        }
    } as const
}
type addPostsACType = ReturnType<typeof addPostsAC>

export const setUserProfileAC = (user: profileInfoResponseType) => {
    return {
        type: "SET-USER-PROFILE",
        user
    } as const
}
type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
type setUserStatusACType = ReturnType<typeof setUserStatusAC>

export const changeUserStatusAC = (status: string) => {
    return {
        type: "CHANGE-STATUS",
        status
    } as const
}
type changeUserStatusACType = ReturnType<typeof changeUserStatusAC>

///////// Thunks

export const setUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        profileApi.getProfileInfo(userId).then((res) => {
                dispatch(setIsLoadingAC(false))
                dispatch(setUserProfileAC(res.data))
            }
        )
    }
}

export const setUserStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId).then((res) => {
                dispatch(setUserStatusAC(res.data))
            }
        )
    }
}

export const changeUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.changeStatus(status).then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(changeUserStatusAC(status))
                }
            }
        )
    }
}
