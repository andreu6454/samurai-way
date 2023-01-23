import {authApi, isAuthResponseType} from "../../Api/auth-api";
import {Dispatch} from "redux";
import {LoginDataType} from "../../Pages/LoginPage/LoginPage";
import {setIsInitializedAC} from "./appReducer";

interface initialStateType {
    authorizedUserId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState: initialStateType = {
    authorizedUserId: 2,
    email: null,
    login: null,
    isAuth: false
}
type authReducerActionType = setUserDataACType | logInACType | logOutACType
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
            return {...state, authorizedUserId: action.userId, isAuth: true}
        }
        case "LOGOUT": {
            return {...state, isAuth: false, authorizedUserId: null}
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

export const logOutAC = () => {
    return {
        type: "LOGOUT",
    } as const
}

type logOutACType = ReturnType<typeof logOutAC>

//////// Thunks

export const setUsersDataTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsInitializedAC(true))
        authApi.me().then((res) => {
            dispatch(setIsInitializedAC(false))
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(res.data.data))
            }
        })
    }
}

export const logInTC = ({email, password, rememberMe}: LoginDataType) => {
    return (dispatch: Dispatch) => {
        authApi.login({email, password, rememberMe}).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(logInAC(res.data.data.userId))
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