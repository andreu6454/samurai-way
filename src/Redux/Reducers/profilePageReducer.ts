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
        case "SET-AUTHORIZED-USER-PROFILE": {
            return {...state, userProfile: action.user}
        }
        case "SET-AUTHORIZED-USER-STATUS": {
            return {...state, status: action.status}
        }
        case "CHANGE-AUTHORIZED-USER-STATUS": {
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

export const setAuthorizedUserProfileAC = (user: profileInfoResponseType) => {
    return {
        type: "SET-AUTHORIZED-USER-PROFILE",
        user
    } as const
}
type setUserProfileACType = ReturnType<typeof setAuthorizedUserProfileAC>

export const setAuthorizedUserStatusAC = (status: string) => {
    return {
        type: "SET-AUTHORIZED-USER-STATUS",
        status
    } as const
}
type setUserStatusACType = ReturnType<typeof setAuthorizedUserStatusAC>

export const changeAuthorizedUserStatusAC = (status: string) => {
    return {
        type: "CHANGE-AUTHORIZED-USER-STATUS",
        status
    } as const
}
type changeUserStatusACType = ReturnType<typeof changeAuthorizedUserStatusAC>

///////// Thunks

export const setAuthorizedUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        const profileInfo = profileApi.getProfileInfo(userId).then((res) => {
                dispatch(setAuthorizedUserProfileAC(res.data))
            }
        )
        const profileStatus = profileApi.getStatus(userId).then((res) => {
                dispatch(setAuthorizedUserStatusAC(res.data))
            }
        )
        Promise.all([profileStatus,profileInfo]).then(()=>{
            dispatch(setIsLoadingAC(false))
        })
    }
}

export const changeUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.changeStatus(status).then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(changeAuthorizedUserStatusAC(status))
                }
            }
        )
    }
}
