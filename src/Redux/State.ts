export type StateDataType = {
    DialogsData: Array<DialogsDataType>
    MessageData: Array<MessageDataType>
    PostsData: Array<PostsDataType>
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type MessageDataType = {
    id: number,
    message: string
}
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export const state = {
    DialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Celvin"},
        {id: 3, name: "Kolyan"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Celvin"},
        {id: 6, name: "Kolyan"},
    ],
    MessageData: [
        {id: 1, message: "hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yooo"},
    ],
    PostsData: [
        {id: 1, message: "Hello", likesCount: 10},
        {id: 2, message: "How are you?", likesCount: 5},
        {id: 3, message: "good", likesCount: 14}
    ]
}