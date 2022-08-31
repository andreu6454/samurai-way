import {PostsDataType, ProfilePageDataType} from "../Redux/Types";
import {v1} from "uuid";

const initialState = {
    PostsData: [
        {id: v1(), message: "Hello", likesCount: 10},
        {id: v1(), message: "How are you?", likesCount: 5},
        {id: v1(), message: "Just message.", likesCount: 14}
    ]
}
export const profilePageReducer = (state: ProfilePageDataType = initialState, action: any) =>{
    return state
}

export const postsReducer = (state: Array<PostsDataType>, action: addPostsACType) =>{
    switch (action.type){
        case "ADD-POST":{
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.post,
                likesCount: 999
            }
            return [newPost,...state];
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