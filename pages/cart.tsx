import Link from 'next/link';
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import CartItem from '../components/CartItem';
import { cartAtom, totalitems, totalPrice } from '../state/state';
import { Product } from "../types/types";


export default function cart() {
    const [cart, setcart] = useRecoilState(cartAtom)
    const count = useRecoilValue(totalitems);
    const price = useRecoilValue(totalPrice);

    return (

        <div className="px-5 ">
            <div className="my-10 shadow-md md:flex ">
                <div className="px-10 py-10 bg-white md:w-3/4">
                    <div className="flex justify-between pb-8 border-b">
                        <h1 className="text-2xl ">Shopping Cart</h1>
                        <h2 className="text-2xl "> {count} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5 ">
                        <h3 className="w-2/5 text-lg text-gray-600 uppercase">Product Details</h3>
                        <h3 className="w-1/5 text-lg text-center text-gray-600 uppercase">Quantity</h3>
                        <h3 className="w-1/5 text-lg text-center text-gray-600 uppercase">Price</h3>
                        <h3 className="w-1/5 text-lg text-center text-gray-600 uppercase">Total</h3>
                    </div>
                    {
                        cart.map((item: Product) => <CartItem key={item._id} item={item} />)
                    }
                    <Link href="/shop">
                        <a href="#" className="flex mt-10 text-sm text-gray-600">
                            Continue Shopping
                        </a>
                    </Link>
                </div>

                <div id="summary" className="px-8 py-10 text-white bg-gray-900 md:w-1/4">
                    <h1 className="text-2xl border-b-2">Order Summary</h1>

                    <div className="mt-8">
                        <div className="flex justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>₹ {price}</span>
                        </div>
                        <button className="w-full py-3 text-sm text-white uppercase bg-gray-800 rounded hover:bg-gray-600">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
