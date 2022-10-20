import {MessageDataType, MessagesPageDataType} from "../Redux/Types";
import {state} from "../Redux/State";

const initialState = state.MessagesPage

type MessagePageReducerType = addMessageACType

export const messagePageReducer = (state: MessagesPageDataType = initialState, action: MessagePageReducerType) =>{
    switch (action.type){
        case "ADD-MESSAGE":{
            const newMessage: MessageDataType = {
                id: action.payload.id,
                userId: 2,
                userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
                message: action.payload.message
            }
            return {...state, MessageData: [...state.MessageData,newMessage], DialogsData:[...state.DialogsData]}
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