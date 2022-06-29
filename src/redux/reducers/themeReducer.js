import {CHANGE_THEME, DEFAULT_THEME, DARK_THEME} from "../actionConstants/themeActions"

const initialState = { isDarkThemeEnabled: false }

const themeReducer = (state = initialState, action) => {
    console.log("initialState", state)
    const {type} = action;
    switch(type) {
        case CHANGE_THEME:
            return !state

        default:
            return state
    }
}

export default themeReducer