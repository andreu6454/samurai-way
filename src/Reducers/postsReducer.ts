import {PostsDataType} from "../Redux/Types";
import {v1} from "uuid";

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
    }
}