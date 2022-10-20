import {PostsDataType, ProfilePageDataType} from "../Redux/Types";
import {v1} from "uuid";
import {state} from "../Redux/State";

const initialState = state.ProfilePage

type ProfilePageReducerType = addPostsACType

export const profilePageReducer = (state: ProfilePageDataType = initialState, action: ProfilePageReducerType) =>{
    switch (action.type){
        case "ADD-POST":{
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.post,
                likesCount: 999
            }
            return {...state, PostsData: [newPost,...state.PostsData]};
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