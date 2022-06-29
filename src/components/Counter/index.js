import {useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import {INCREMENT, DECREMENT, INCREMENTBY5, INCREMENTBYUSERVALUE} from "../../redux/actionConstants/counterActions"

const Counter = () => {
  const [value, setValue] = useState(null)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
      <div>
        <h1><strong>Count: {count}</strong></h1>
        <button onClick={() => dispatch({ type: INCREMENT})} style={{margin: "0 10px"}}><strong>+</strong></button>
        <button onClick={() => dispatch({ type: DECREMENT })} style={{margin: "0 10px"}}><strong>-</strong></button>
        <button onClick={() => dispatch({ type: INCREMENTBY5 })} style={{margin: "0 10px"}}>Increment By 5</button>
        <h2>
          Increment by <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </h2>
        <button onClick={(e) => dispatch({type: INCREMENTBYUSERVALUE, payload: value})}>Add</button>        
      </div>
  )
}



export default Counter