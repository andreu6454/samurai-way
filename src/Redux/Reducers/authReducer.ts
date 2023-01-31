import {authApi, isAuthResponseType} from "../../Api/auth-api";
import {Dispatch} from "redux";
import {LoginDataType} from "../../Pages/LoginPage/LoginPage";
import {setIsInitializedAC} from "./appReducer";

interface initialStateType {
    authorizedUserId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaURL: string,
    isCaptchaRequired: boolean
}

const initialState: initialStateType = {
    authorizedUserId: 2,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: "",
    isCaptchaRequired: false
}
type authReducerActionType =
    setUserDataACType
    | logInACType
    | logOutACType
    | setCaptchaACType
    | setIsCaptchaRequiredAcType
export const authReducer = (state = initialState, action: authReducerActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                login: action.user.login,
                email: action.user.email,
                authorizedUserId: action.user.id,
                isAuth: true,
            }
        }
        case "LOGIN": {
            return {...state, authorizedUserId: action.userId, isAuth: true, captchaURL: '', isCaptchaRequired: false}
        }
        case "LOGOUT": {
            return {...state, isAuth: false, authorizedUserId: null}
        }
        case "SET-LOGIN-CAPTCHA": {
            return {...state, captchaURL: action.captcha}
        }
        case "SET-IS-CAPTCHA-REQUIRED": {
            return {...state, isCaptchaRequired: action.isCaptchaRequire}
        }
        default:
            return state
    }
}

//////// Reducers

export const setUserDataAC = (user: isAuthResponseType) => {
    return {
        type: "SET-USER-DATA",
        user
    } as const
}

type setUserDataACType = ReturnType<typeof setUserDataAC>

export const logInAC = (userId: number) => {
    return {
        type: "LOGIN",
        userId
    } as const
}

type logInACType = ReturnType<typeof logInAC>

export const setCaptchaAC = (captcha: string) => {
    return {
        type: "SET-LOGIN-CAPTCHA",
        captcha
    } as const
}

type setCaptchaACType = ReturnType<typeof setCaptchaAC>

export const setIsCaptchaRequiredAc = (isCaptchaRequire: boolean) => {
    return {
        type: "SET-IS-CAPTCHA-REQUIRED",
        isCaptchaRequire
    } as const
}

type setIsCaptchaRequiredAcType = ReturnType<typeof setIsCaptchaRequiredAc>

export const logOutAC = () => {
    return {
        type: "LOGOUT",
    } as const
}

type logOutACType = ReturnType<typeof logOutAC>

//////// Thunks

export const isAuthUser = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsInitializedAC(false))
        authApi.me().then((res) => {
            dispatch(setIsInitializedAC(true))
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(res.data.data))
            }
        })
    }
}

export const logInTC = ({email, password, rememberMe, captcha}: LoginDataType) => {
    return (dispatch: Dispatch) => {
        authApi.login({email, password, rememberMe, captcha}).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(logInAC(res.data.data.userId))
            }
            if (res.data.resultCode === 10) {
                dispatch(setIsCaptchaRequiredAc(true))
            }
        })
    }
}

export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        authApi.logOut().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(logOutAC())
            }
        })
    }
}

export const getCaptchaTC = () => {
    return (dispatch: Dispatch) => {
        authApi.getCaptcha().then((res) => {
            dispatch(setCaptchaAC(res.data.url))
        })
    }
}

