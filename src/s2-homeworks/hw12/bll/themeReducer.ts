const initState:ThemeReducerType = {
    themeId: 1
}

export type ThemeReducerType={
    themeId:number
}

export const themeReducer = (state:ThemeReducerType = initState, action: ActionType): ThemeReducerType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state, themeId:action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number):{type:string, id:number} => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionType=ReturnType<typeof changeThemeId>
