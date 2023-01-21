import {instance} from "./users-api";
import {LoginDataType} from "../Components/LoginPage/LoginPage";

export const authApi = {
    me() {
        return instance.get<{ data: isAuthResponseType, resultCode: number }>('/auth/me')
    },
    login({email, password, rememberMe}: LoginDataType) {
        return instance.post<isLoginedResponseType>('/auth/login', {email, password, rememberMe})
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