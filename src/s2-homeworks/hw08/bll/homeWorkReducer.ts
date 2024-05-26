import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            let newState = [...state];
            if(action.payload=='up'){
                newState.sort((a, b) => a.name.localeCompare(b.name))
            }
            if(action.payload=='down'){
                newState.sort((a, b) => b.name.localeCompare(a.name))
            }

            return newState // need to fix
        }
        case 'check': {
            return state.filter(user=>user.age>=18)
        }
        default:
            return state
    }
}
