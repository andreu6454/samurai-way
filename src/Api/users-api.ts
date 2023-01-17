import axios from "axios";
import {UserType} from "../Redux/Types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,

})
export const usersApi = {
    getUsers(currentPage?: number, pageSize?: number) {
        return instance.get<userResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
    },
    getProfileInfo(userId: number) {
        return instance.get<profileInfoResponseType>(`/profile/${userId}`)
    }
}


export type userResponseType = {
    error: string | null,
    items: UserType[],
    totalCount: number
}

export type profileInfoResponseType = {
    aboutMe: string,
    contacts:{
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number | null,
    photos:{
        small: string,
        large: string
    }
}