import { atom } from "recoil";
import { Product } from "../types/types";


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

let p: (Product[])[] = [];
export const cartAtom = atom(
    {
        key: "cartitems",
        default: p
    }
)