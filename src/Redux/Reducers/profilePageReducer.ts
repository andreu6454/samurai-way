import {PostsDataType, ProfilePageDataType} from "../Types";
import {v1} from "uuid";
import {InitialState} from "../InitialState";
import {profileInfoResponseType} from "../../Api/users-api";
import {setIsLoadingAC} from "./appReducer";
import {Dispatch} from "redux";
import {changeUserProfileDataType, profileApi} from "../../Api/profile-api";
import {editProfileDatatype} from "../../Pages/ProfilePage/ProfileInfo/ProfileEdit/ProfileEditBlock";

const initialState = InitialState.ProfilePage

type ProfilePageReducerType =
    addPostsACType
    | setUserProfileACType
    | changeUserStatusACType
    | setUserStatusACType
    | changeAuthorizedAvatarACType
    | changeProfileDataACType

export const profilePageReducer = (state: ProfilePageDataType = initialState, action: ProfilePageReducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.post,
                likesCount: 0
            }
            return {...state, PostsData: [newPost, ...state.PostsData]};
        }
        case "SET-AUTHORIZED-USER-PROFILE": {
            return {...state, userProfile: action.user}
        }
        case "SET-AUTHORIZED-USER-STATUS": {
            return {...state, status: action.status}
        }
        case "CHANGE-AUTHORIZED-USER-STATUS": {
            return {...state, status: action.status}
        }
        case "CHANGE-AUTHORIZED-USER-AVATAR": {
            return {...state, ...state.userProfile, ...state.userProfile.photos, large: String(action.avatar)}
        }
        case "CHANGE-AUTHORIZED-USER-PROFILE-DATA": {
            const updatedProfile = {
                aboutMe: action.AboutMe,
                contacts: {
                    facebook: "",
                    website: "",
                    vk: "",
                    twitter: "",
                    instagram: "",
                    youtube: "",
                    github: "",
                    mainLink: ""
                },
                lookingForAJob: action.LookingForAJob,
                lookingForAJobDescription: action.LookingForAJobDescription,
                fullName: action.Name,
                userId: state.userProfile.userId,
                photos: {
                    small: state.userProfile.photos.small,
                    large: state.userProfile.photos.large
                }
            }
            return {...state,userProfile: updatedProfile}
        }
        default:
            return state;
    }
}

///////// Reducers

export const addPostsAC = (post: string) => {
    return {
        type: "ADD-POST",
        payload: {
            post
        }
    } as const
}
type addPostsACType = ReturnType<typeof addPostsAC>

export const setAuthorizedUserProfileAC = (user: profileInfoResponseType) => {
    return {
        type: "SET-AUTHORIZED-USER-PROFILE",
        user
    } as const
}
type setUserProfileACType = ReturnType<typeof setAuthorizedUserProfileAC>

export const setAuthorizedUserStatusAC = (status: string) => {
    return {
        type: "SET-AUTHORIZED-USER-STATUS",
        status
    } as const
}
type setUserStatusACType = ReturnType<typeof setAuthorizedUserStatusAC>

export const changeAuthorizedUserStatusAC = (status: string) => {
    return {
        type: "CHANGE-AUTHORIZED-USER-STATUS",
        status
    } as const
}
type changeUserStatusACType = ReturnType<typeof changeAuthorizedUserStatusAC>


export const changeProfileDataAC = ({
                                        Name,
                                        AboutMe,
                                        LookingForAJob,
                                        LookingForAJobDescription
                                    }: editProfileDatatype) => {
    return {
        type: "CHANGE-AUTHORIZED-USER-PROFILE-DATA",
        Name,
        AboutMe,
        LookingForAJob,
        LookingForAJobDescription
    } as const
}
type changeProfileDataACType = ReturnType<typeof changeProfileDataAC>

export const changeAuthorizedAvatarAC = (avatar: File) => {
    return {
        type: "CHANGE-AUTHORIZED-USER-AVATAR",
        avatar
    } as const
}
type changeAuthorizedAvatarACType = ReturnType<typeof changeAuthorizedAvatarAC>

///////// Thunks

export const setAuthorizedUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        const profileInfo = profileApi.getProfileInfo(userId).then((res) => {
                dispatch(setAuthorizedUserProfileAC(res.data))
            }
        )
        const profileStatus = profileApi.getStatus(userId).then((res) => {
                dispatch(setAuthorizedUserStatusAC(res.data))
            }
        )
        Promise.all([profileStatus, profileInfo]).then(() => {
            dispatch(setIsLoadingAC(false))
        })
    }
}

export const changeUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.changeStatus(status).then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(changeAuthorizedUserStatusAC(status))
                }
            }
        )
    }
}
export const changeUserAvatarTC = (file: File) => {
    return (dispatch: Dispatch, getState: any) => {
        const state = getState()
        profileApi.changeAvatar(file).then((res) => {
                if (res.data.resultCode === 0) {
                    profileApi.getProfileInfo(state.auth.authorizedUserId).then((res) => {
                        dispatch(setAuthorizedUserProfileAC(res.data))
                    })
                }
            }
        )
    }
}

export const changeUserProfileDataTC = ({
                                            Name,
                                            AboutMe,
                                            LookingForAJob,
                                            LookingForAJobDescription,
                                            Status,
                                            userId
                                        }: changeUserProfileDataType) => {
    return (dispatch: Dispatch) => {
        const changeUserData = profileApi.changeUserProfileData({
            Name,
            AboutMe,
            LookingForAJob,
            LookingForAJobDescription, userId, Status
        })
        const changeStatus = profileApi.changeStatus(Status)
        Promise.all([changeUserData, changeStatus]).then(() => {
            dispatch(setAuthorizedUserStatusAC(Status))
            dispatch(changeProfileDataAC({
                Name,
                AboutMe,
                LookingForAJob,
                LookingForAJobDescription,
                Status
            }))
        })
    }
}
