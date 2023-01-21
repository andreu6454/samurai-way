import {instance, profileInfoResponseType} from "./users-api";

export const profileApi = {
    changeStatus(status: string) {
        return instance.put<changeStatusResponse>('/profile/status', {status: status})
    },
    getStatus(userId: number){
        return instance.get(`/profile/status/${userId}`)
    },
    getProfileInfo(userId: number) {
        return instance.get<profileInfoResponseType>(`/profile/${userId}`)
    }
}

interface changeStatusResponse {
    resultCode: number
    messages: string[],
    data: {}
}