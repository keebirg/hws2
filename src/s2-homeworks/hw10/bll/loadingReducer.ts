const initState = {
    isLoading: false,
}

export const loadingReducer = (state: StateType= initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'SET_LOADING': return {...state, isLoading:action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof setLoadingAC>

type StateType={
    isLoading:boolean
}

type ActionType=LoadingActionType

export const setLoadingAC = (isLoading: boolean) => ({
    type: 'SET_LOADING',
    isLoading,
} as const)
