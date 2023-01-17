import {instance} from "./users-api";

export const followApi = {
    isFollow(userId: number) {
        return instance.get<boolean>(`/follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post<followResponseType>(`/follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<unFollowResponseType>(`/follow/${userId}`)
    }
}

export type followResponseType = {
    resultCode: number,
    message: string[],
    data: {}
}
export type unFollowResponseType = {
    resultCode: number,
    message: string[],
    data: {}
}
