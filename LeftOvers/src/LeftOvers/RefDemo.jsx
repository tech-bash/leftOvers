import { forwardRef, useRef } from "react";

const CustomInput = forwardRef(function Customfunction(ref, props) {
    return <input ref={ref} {...props} placeholder="enter" />;
})

export default function RefDemo() {
    const inputRef = useRef("");

    return (
        <>
        <CustomInput ref={inputRef} />

        <button onClick={() => inputRef.current.focus()}>
            focus input
        </button>
        </>
    )
}