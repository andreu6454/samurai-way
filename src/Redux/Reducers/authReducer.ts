import {authApi, isLoginedResponseType} from "../../Api/auth-api";
import {Dispatch} from "redux";

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
export const authReducer = (state = initialState, action: authReducerActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, login: action.user.login, email: action.user.email, userId: action.user.id, isAuth: true}
        }
        default:
            return state
    }
}

//////// Reducers

export const setUserDataAC = (user: isLoginedResponseType) => {
    return {
        type: "SET-USER-DATA",
        user
    }
}

type setUserDataACType = ReturnType<typeof setUserDataAC>
type authReducerActionType = setUserDataACType

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
