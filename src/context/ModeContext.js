import {createContext, useReducer} from "react";

export const ModeContext = createContext()

const modeReducer = (state, action) => {
    switch (action.type) {
        case('CHANGE_MODE'):
            return { ...state, mode: action.payload}
        case('CHANGE_FONT'):
            return { ...state, size: action.payload}
        default:
            return state
    }
}

export function ModeProvider({children}) {
    const [state, dispatch] = useReducer(modeReducer, {
        mode: 'dark',
        size: 2
    })

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    const changeFontSize = (size) => {
        console.log(state.size)
        if (size === 'increase' && state.size < 4){
            dispatch({ type: 'CHANGE_FONT', payload: state.size + 1 })
        }else if (size === 'decrease' && state.size > 0){
            dispatch({ type: 'CHANGE_FONT', payload: state.size - 1 })
        }

    }

    return (
        <ModeContext.Provider value={{...state, changeMode, changeFontSize}}>
            {children}
        </ModeContext.Provider>
    )
}