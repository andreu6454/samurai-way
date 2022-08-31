import {MessageDataType, MessagesPageDataType} from "../Redux/Types";

const initialState = {
    DialogsData: [
        {id: 1, name: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
        {id: 2, name: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
        {id: 3, name: "Kolyan", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
    ],
    MessageData: [
        {
            id: 1,
            userId: 1,
            userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg",
            message: "hello"
        },
        {
            id: 2,
            userId: 1,
            userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg",
            message: "How are you?"
        },
        {
            id: 3,
            userId: 2,
            userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
            message: "Just message."
        }
    ]
}

export const messagePageReducer = (state: MessagesPageDataType = initialState, action: any) =>{
    return state
}

export const messagesReducer = (state: Array<MessageDataType>, action:addMessageACType) =>{
    switch (action.type){
        case "ADD-MESSAGE":{
            const newMessage: MessageDataType = {
                id: action.payload.id,
                userId: 2,
                userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
                message: action.payload.message
            }
            return [...state, newMessage]
        }
        default: return state
    }
}

type addMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = (id: number, message: string) =>{
    return {
        type: "ADD-MESSAGE",
        payload:{
            id,
            message
        }
    } as const
}