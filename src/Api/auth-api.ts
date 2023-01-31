import {instance} from "./users-api";
import {LoginDataType} from "../Pages/LoginPage/LoginPage";

export const authApi = {
    me() {
        return instance.get<{ data: isAuthResponseType, resultCode: number }>('/auth/me')
    },
    login({email, password, rememberMe , captcha}: LoginDataType) {
        return instance.post<isLoginedResponseType>('/auth/login', {email, password, rememberMe, captcha})
    },
    logOut(){
        return instance.delete<logOutResponseType>('/auth/login')
    },
    getCaptcha(){
        return instance.get<{url: string}>('/security/get-captcha-url')
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
    captcha: string
}

export type logOutResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}