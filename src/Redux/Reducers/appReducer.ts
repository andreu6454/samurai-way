interface initialStateType {
    isLoading: boolean
}
export const appReducer = (state: initialStateType ={isLoading: false}, action: appReducerActionType) => {
    switch (action.type){
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
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

type appReducerActionType = setIsLoadingACType
