import React from 'react'
import { useRecoilState } from 'recoil'
import { lengthAtom } from "../state/state";
const Counter = () => {
    const [length, setLength] = useRecoilState(lengthAtom)
    return (
        <div className="pt-4 m-3 bg-blue-600">
            Length: {length}
        </div >
    )
}

export default Counter
