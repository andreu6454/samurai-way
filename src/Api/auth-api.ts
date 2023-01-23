import {instance} from "./users-api";
import {LoginDataType} from "../Pages/LoginPage/LoginPage";

export const authApi = {
    me() {
        return instance.get<{ data: isAuthResponseType, resultCode: number }>('/auth/me')
    },
    login({email, password, rememberMe}: LoginDataType) {
        return instance.post<isLoginedResponseType>('/auth/login', {email, password, rememberMe})
    },
    logOut(){
        return instance.delete<logOutResponseType>('/auth/login')
    }
}

export type isAuthResponseType = {
    id: number,
    email: string,
    login: string
}

export type isLoginedResponseType = {
    resultCode: number
    messages: string[],
    data: {
        userId: number
    }

}

export type logOutResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}