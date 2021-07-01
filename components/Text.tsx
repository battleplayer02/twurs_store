import React from 'react'
import { useRecoilState } from 'recoil'
import { textAtom } from "../state/state";
const Text = () => {
    const [text, _] = useRecoilState(textAtom)
    return (
        <div className="pt-4 m-3 bg-green-500">
            Text: {text}
        </div>
    )
}

export default Text
