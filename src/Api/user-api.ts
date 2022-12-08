import axios from "axios";
import {UserType} from "../Redux/Types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,

})
export const userApi = {
    getUsers() {
        return instance.get<userResponseType>('/users')
    }
}


export type userResponseType = {
    error: string | null,
    items: UserType[],
    totalCount: number
}