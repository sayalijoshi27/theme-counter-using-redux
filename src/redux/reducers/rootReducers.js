// imcomplete mapping for diff reducers pending
import { combineReducers } from "redux"
import themeReducer from "./themeReducer"
import counterReducer from "./counterReducer"

const rootReducer = combineReducers({
    theme: themeReducer,
    count: counterReducer,
})

export default rootReducer


// const state={
//     theme:{
//         isDarkThemeEnabled:false
//     },
//     count:{
//         value:0
//     }
// }