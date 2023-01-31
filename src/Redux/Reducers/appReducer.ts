interface initialStateType {
    isLoading: boolean,
    isInitialized: boolean,
    isVisible: boolean
}

const initialState: initialStateType = {
    isLoading: false,
    isInitialized: false,
    isVisible: true
}

type appReducerActionType = setIsLoadingACType | setIsInitializedACType | setAvatarVisibleACType

export const appReducer = (state: initialStateType = initialState, action: appReducerActionType) => {
    switch (action.type) {
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        case "SET-AVATAR-VISIBLE":
            console.log(action.isVisible)
            return {...state, isVisible: action.isVisible}
        default:
            return state
    }
}

export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: 'SET-LOADING',
        isLoading
    } as const
}
type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>

export const setIsInitializedAC = (isInitialized: boolean) => {
    return {
        type: 'SET-INITIALIZED',
        isInitialized
    } as const
}
type setIsInitializedACType = ReturnType<typeof setIsInitializedAC>

export const setAvatarVisibleAC = (isVisible: boolean) => {
    return {
        type: 'SET-AVATAR-VISIBLE',
        isVisible
    } as const
}
type setAvatarVisibleACType = ReturnType<typeof setAvatarVisibleAC>


