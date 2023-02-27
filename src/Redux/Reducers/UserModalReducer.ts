import {profileInfoResponseType} from "../../Api/users-api";
import {Dispatch} from "redux";
import {profileApi} from "../../Api/profile-api";
import {followApi} from "../../Api/follow-api";
import {InitialState} from "../InitialState";

const initialState = {
    userInfo: InitialState.ProfilePage.userProfile,
    status: "",
    isFollowing: false,
    isDisabled: false,
    isOpen: false
}
type initialStateType = {
    userInfo: profileInfoResponseType,
    status: string,
    isFollowing: boolean,
    isDisabled: boolean,
    isOpen: boolean
}

type UserPageReducerType =
    setUserProfileACType
    | setUserStatusACType
    | setUserFollowingACType
    | setButtonDisabledACType
    | setModalOpenACType

export const UserModalReducer = (state: initialStateType = initialState, action: UserPageReducerType) => {
    switch (action.type) {
        case "SET-USER-PROFILE": {
            return {...state, userInfo: action.user}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-USER-FOLLOWING": {
            return {...state, isFollowing: action.isFollow}
        }
        case "SET-BUTTON-DISABLED": {
            return {...state, isDisabled: action.isDisabled}
        }
        case "SET-MODAL-OPEN": {
            return {...state, isOpen: action.isOpen}
        }
        default:
            return state;
    }
}

export const setUserProfileAC = (user: profileInfoResponseType) => {
    return {
        type: "SET-USER-PROFILE",
        user
    } as const
}
type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export const setUserFollowingAC = (isFollow: boolean) => {
    return {
        type: "SET-USER-FOLLOWING",
        isFollow
    } as const
}
type setUserFollowingACType = ReturnType<typeof setUserFollowingAC>
export const setButtonDisabledAC = (isDisabled: boolean) => {
    return {
        type: "SET-BUTTON-DISABLED",
        isDisabled
    } as const
}
type setButtonDisabledACType = ReturnType<typeof setButtonDisabledAC>

export const setModalOpenAC = (isOpen: boolean) => {
    return {
        type: "SET-MODAL-OPEN",
        isOpen
    } as const
}
type setModalOpenACType = ReturnType<typeof setModalOpenAC>

export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
type setUserStatusACType = ReturnType<typeof setUserStatusAC>


export const setUserStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfileInfo(userId).then((res) => {
            dispatch(setUserProfileAC(res.data))
        })
        profileApi.getStatus(userId).then((res) => {
            dispatch(setUserStatusAC(res.data))
        })
        followApi.isFollow(userId).then((res) => {
            dispatch(setUserFollowingAC(res.data))
        })
    }
}
export const followUserTC = (followed: boolean, userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setButtonDisabledAC(true))
        if (followed) {
            followApi.unFollow(userId).then((res) => {
                dispatch(setButtonDisabledAC(false))
                if (res.data.resultCode === 0) {
                    dispatch(setUserFollowingAC(false))
                }
            }).catch(() => {
                dispatch(setButtonDisabledAC(false))
            })
        } else {
            followApi.follow(userId).then((res) => {
                dispatch(setButtonDisabledAC(false))
                if (res.data.resultCode === 0) {
                    dispatch(setUserFollowingAC(true))
                }
            }).catch(() => {
                dispatch(setButtonDisabledAC(false))
            })
        }
    }
}