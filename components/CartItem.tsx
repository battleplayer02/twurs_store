import React from 'react'
import { useRecoilState } from 'recoil';
import { cartAtom } from '../state/state';

import { Product } from "../types/types";

export default function CartItem({ item }) {
    const [cart, setcart] = useRecoilState(cartAtom)


    const deleteItem = () => {

        setcart(cart.filter((cartItem: Product) => item._id !== cartItem._id))
    }


    return (
        <div className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-20" src={item.image} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-grow ml-7">
                    <span className="text-sm font-bold">{item.name}</span>
                    <button className="w-1/2 p-2 border border-red-500 rounded hover:text-white hover:bg-red-500 " onClick={deleteItem}>Remove</button>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                {item.quantity}
            </div>
            <span className="w-1/5 text-sm text-center">₹{item.price}</span>
            <span className="w-1/5 text-sm text-center">₹{item.price * item.quantity}</span>
        </div>
    )
}
