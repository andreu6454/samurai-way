import {instance, profileInfoResponseType} from "./users-api";
import {editProfileDatatype} from "../Pages/ProfilePage/ProfileInfo/ProfileEdit/ProfileEditBlock";

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
    },
    changeUserProfileData({
                              Name,
                              AboutMe,
                              LookingForAJob,
                              LookingForAJobDescription,
                              userId
                          }: changeUserProfileDataType) {
        return instance.put('/profile', {
            userId: userId,
            fullName: Name,
            AboutMe: AboutMe,
            lookingForAJob: LookingForAJob,
            LookingForAJobDescription: LookingForAJobDescription
        })
    }
}

interface changeStatusResponse {
    resultCode: number
    messages: string[],
    data: {}
}

export interface changeUserProfileDataType extends editProfileDatatype {
    userId: number
}