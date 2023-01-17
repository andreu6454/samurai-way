import {profileInfoResponseType} from "../Api/users-api";

export type StateDataType = {
    ProfilePage: ProfilePageDataType
    MessagesPage: MessagesPageDataType
    NavBarPage: NavBarDataType
    FriendsPage: FriendsPageDataType
    UsersPage: UsersPageType
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
    PostsData: Array<PostsDataType>,
    userProfile: profileInfoResponseType
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
    id: string,
    message: string,
    likesCount: number
}
export type FriendsPageDataType = {
    FriendsData: Array<FriendsType>
    FriendsRequest: Array<FriendsRequestType>
}
export type FriendsType = {
    id: string
    friend: string,
    surname: string,
    avatar: string
}
export type FriendsRequestType = {
    name: string,
    surname: string,
    id: string,
    avatar: string,
    mutualFriends: number
}
export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
}
export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}