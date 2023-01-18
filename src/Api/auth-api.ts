import {instance} from "./users-api";

export const authApi = {
    me(){
        return instance.get<{data: isLoginedResponseType, resultCode: number}>('/auth/me')
    }
}

export type isLoginedResponseType = {
    id: number,
    email: string,
    login: string
}