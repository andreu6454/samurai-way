import {isLoginedResponseType} from "../../Api/auth-api";

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

export const setUserDataAC = (user: isLoginedResponseType) => {
    return {
        type: "SET-USER-DATA",
        user
    }
}

type setUserDataACType = ReturnType<typeof setUserDataAC>
type authReducerActionType = setUserDataACType