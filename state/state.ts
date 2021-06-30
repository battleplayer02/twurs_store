import { atom } from "recoil";


export const textAtom = atom(
    {
        key: "text",
        default: ""
    }
);

export const lengthAtom = atom(
    {
        key: "length",
        default: 0
    }
);