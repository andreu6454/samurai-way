import axios from "axios";
import {UserType} from "../Redux/Types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,

})
export const usersApi = {
    getUsers(currentPage?: number,pageSize?: number) {
        return instance.get<userResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
    }
}


export type userResponseType = {
    error: string | null,
    items: UserType[],
    totalCount: number
}