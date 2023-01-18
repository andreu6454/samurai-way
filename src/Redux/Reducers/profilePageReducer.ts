import {PostsDataType, ProfilePageDataType} from "../Types";
import {v1} from "uuid";
import {InitialState} from "../InitialState";
import {profileInfoResponseType, usersApi} from "../../Api/users-api";
import {setIsLoadingAC} from "./appReducer";
import {Dispatch} from "redux";

const initialState = InitialState.ProfilePage

type ProfilePageReducerType = addPostsACType | setUserProfileACType

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

///////// Thunks

export const setUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        usersApi.getProfileInfo(userId).then((res) => {
                dispatch(setIsLoadingAC(false))
                dispatch(setUserProfileAC(res.data))
            }
        )
    }
}
