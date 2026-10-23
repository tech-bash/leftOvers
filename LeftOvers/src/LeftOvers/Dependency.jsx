import {memo, useCallback, useState} from 'react';

const child = memo(({onClick}) =>  {
    console.log("Child rendered");

    return <button onClick={onClick}>Increment</button>
})

export default function CallbackDemo() {
    const [count, setCount]= useState(0);
    const [theme, setTheme] = useState("light");


    const increment = useCallback(() => {
        setCount((current) => current + 1)
    }, []);

    return(
        <>
        
        </>
    )

}