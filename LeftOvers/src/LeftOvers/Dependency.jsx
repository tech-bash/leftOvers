import {memo, useCallback, useState} from 'react';

const Child = memo(({onIncrement}) =>  {
    console.log("Child rendered");

    return <button onClick={onIncrement}>Increment</button>
})

export default function CallbackDemo() {
    const [count, setCount]= useState(0);
    const [theme, setTheme] = useState("light");

    const call = useCallback(() => {console.log("kuch bhi")}, [])

    const increment = useCallback(() => {
        console.log("increment")
        setCount((current) => current + 1)
    }, []);

    return(
        <>
        <h1>count {count}</h1>
        <h2>theme {theme}</h2>

        <button onClick={() => setTheme("dard")}>Toggle</button>

        <Child onIncrement = {increment}/>
        </>
    )

}