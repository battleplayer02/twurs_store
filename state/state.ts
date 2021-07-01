import { atom, selector } from "recoil";
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

let p: (Product)[] = [];
export const cartAtom = atom(
    {
        key: "cartitems",
        default: p
    }
)

export const totalitems = selector({
    key: 'totalitems',
    get: ({ get }): number => {
        let count = 0;
        let cart = get(cartAtom).forEach((item: Product) => {
            count += item.quantity;
        })
        return count;
    },
});

export const totalPrice = selector({
    key: 'totalPrice',
    get: ({ get }): number => {
        let price = 0;
        let cart = get(cartAtom).forEach((item: Product) => {
            price += item.price;
        })
        return price;
    },
});

