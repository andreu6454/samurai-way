import {PostsDataType, ProfilePageDataType} from "../Types";
import {v1} from "uuid";
import {InitialState} from "../InitialState";
import {profileInfoResponseType} from "../../Api/users-api";

const initialState = InitialState.ProfilePage

type ProfilePageReducerType = addPostsACType | setUserProfileACType

export const profilePageReducer = (state: ProfilePageDataType = initialState, action: ProfilePageReducerType) =>{
    switch (action.type){
        case "ADD-POST":{
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.post,
                likesCount: 0
            }
            return {...state, PostsData: [newPost,...state.PostsData]};
        }
        case "SET-USER-PROFILE":{
            return {...state, userProfile: action.user}
        }
        default: return state;
    }
}

type addPostsACType = ReturnType<typeof addPostsAC>

export const addPostsAC = (post: string) =>{
    return{
        type: "ADD-POST",
        payload:{
            post
        }
    } as const
}
export const setUserProfileAC = (user: profileInfoResponseType) => {
    return{
        type: "SET-USER-PROFILE",
        user
    } as const
}

type setUserProfileACType = ReturnType<typeof setUserProfileAC>