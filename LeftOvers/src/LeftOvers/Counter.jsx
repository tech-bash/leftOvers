import { useReducer } from "react";

const initialState = {count : 0};

function reducer(state, action) {
    switch(action.type) {
        case "Increment":
            return {count: state.count +1};
        case "Decrement":
            return{count: state.count - 1};
        case "Reset":
            return{count: 0};
        
        default:
           return state;
    
    }
}

export default function Counter() {
    const [state, dispatch]  = useReducer(
        reducer,
        initialState
    )

    return(
        <>
        <h1>Count : {state.count}</h1>

        <button onClick={() => dispatch({type: "Increment"})}>+</button> 
        <button onClick={() => dispatch({type: "Decrement"})}>-</button>
        <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
        </>
    )
}