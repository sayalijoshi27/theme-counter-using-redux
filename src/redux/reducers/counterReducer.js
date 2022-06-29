import { INCREMENT, DECREMENT, INCREMENTBY5, INCREMENTBYUSERVALUE } from "../actionConstants/counterActions"

const initialState = 0

const counterReducer = (state = initialState, action) => {
  const {type, payload, setValue} = action
  
  switch(type) {
    case INCREMENT: 
      return state + 1

    case DECREMENT:
      return state - 1

    case INCREMENTBY5:
      return state + 5
        
    case INCREMENTBYUSERVALUE:
      setValue("")
      return state + parseInt(payload)        

    default:
      return state
  }
}

export default counterReducer