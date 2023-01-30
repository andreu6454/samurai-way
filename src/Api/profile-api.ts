import {instance, profileInfoResponseType} from "./users-api";

export const profileApi = {
    changeStatus(status: string) {
        return instance.put<changeStatusResponse>('/profile/status', {status: status})
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    getProfileInfo(userId: number) {
        return instance.get<profileInfoResponseType>(`/profile/${userId}`)
    },
    changeAvatar(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<changeStatusResponse>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

interface changeStatusResponse {
    resultCode: number
    messages: string[],
    data: {}
}