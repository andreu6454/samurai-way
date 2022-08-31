import {MessageDataType} from "../Redux/Types";

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