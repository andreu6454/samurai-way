import {authApi, isAuthResponseType} from "../../Api/auth-api";
import {Dispatch} from "redux";
import {LoginDataType} from "../../Components/LoginPage/LoginPage";

interface initialStateType {
    userId: null | number,
    email: null | string,
    login: null | string,
    isLoading: boolean,
    isAuth: boolean
}

const initialState: initialStateType = {
    userId: 2,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
}
type authReducerActionType = setUserDataACType | setIsAuthACType
export const authReducer = (state = initialState, action: authReducerActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, login: action.user.login, email: action.user.email, userId: action.user.id, isAuth: true}
        }
        case "SET-AUTH": {
            return {...state, userId: action.userId, isAuth: true}
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

export const setIsAuthAC = (userId: number) => {
    return {
        type: "SET-AUTH",
        userId
    } as const
}

type setIsAuthACType = ReturnType<typeof setIsAuthAC>

//////// Thunks

export const setUsersDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi.me().then((res) => {
            if(res.data.resultCode === 0){
                dispatch(setUserDataAC(res.data.data))
            }
        })
    }
}

export const setIsAuthTC = ({email, password, rememberMe}: LoginDataType) => {
    console.log(email,password,rememberMe)
    return (dispatch: Dispatch) => {
        authApi.login({email, password, rememberMe}).then((res) => {
            if(res.data.resultCode === 0){
                dispatch(setIsAuthAC(res.data.data.userId))
            }
        })
    }
}