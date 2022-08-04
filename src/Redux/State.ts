export type StateDataType = {
    ProfilePage: ProfilePageDataType
    MessagesPage: MessagesPageDataType
    NavBarPage: NavBarDataType
}
export type NavBarDataType = {
    NavBarData: Array<NavBarType>
}
export type NavBarType = {
    id: string
    friend: string,
    avatar: string
}
export type ProfilePageDataType = {
    PostsData: Array<PostsDataType>
}
export type MessagesPageDataType = {
    DialogsData: Array<DialogsDataType>
    MessageData: Array<MessageDataType>
}
export type DialogsDataType = {
    id: number,
    name: string,
    avatar: string
}
export type MessageDataType = {
    id: number,
    userId: number,
    userAvatar: string,
    message: string
}
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export const state = {
    ProfilePage: {
        PostsData: [
            {id: 1, message: "Hello", likesCount: 10},
            {id: 2, message: "How are you?", likesCount: 5},
            {id: 3, message: "good", likesCount: 14}
        ]
    },
    MessagesPage: {
        DialogsData: [
            {id: 1, name: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
            {id: 2, name: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
            {id: 3, name: "Kolyan", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
        ],
        MessageData: [
            {id: 1, userId: 1, userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg", message: "hello"},
            {id: 2, userId: 1, userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg", message: "How are you?"},
            {id: 3, userId: 2, userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg", message: "Yoooooooooo"}
        ]
    },
    NavBarPage: {
        NavBarData: [
            {id: "1", friend: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
            {id: "2", friend: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
            {id: "3", friend: "Kolya", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
        ]
    }
}