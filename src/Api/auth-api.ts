import {instance} from "./users-api";

export const authApi = {
    isLogined(){
        return instance.get<{data: isLoginedResponseType}>('/auth/me')
    }
}

export type isLoginedResponseType = {
    id: number,
    email: string,
    login: string
}