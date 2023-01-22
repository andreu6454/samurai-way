interface initialStateType {
    isLoading: boolean,
    isInitialized: boolean
}

const initialState: initialStateType = {
    isLoading: false,
    isInitialized: false
}

type appReducerActionType = setIsLoadingACType | setIsInitializedACType

export const appReducer = (state: initialStateType = initialState, action: appReducerActionType) => {
    switch (action.type) {
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
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


