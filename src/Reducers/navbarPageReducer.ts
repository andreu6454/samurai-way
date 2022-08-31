import {NavBarDataType} from "../Redux/Types";

const initialState =  {
    NavBarData: [
        {id: "1", friend: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
        {id: "2", friend: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
        {id: "3", friend: "Kolya", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
    ]
}

export const navbarPageReducer = (state:NavBarDataType = initialState, action: any) =>{
    return state
}