import { useRef, useState } from "react";





const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue)


    const updateBoolValue = useRef({
        toggle: () => setValue((value) => !value),
        on: () => setValue(true),
        off: () => setValue(false)
    })


    return [ value, updateBoolValue.current, "hello" ]
}


export default useBoolean;