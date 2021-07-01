import React from 'react'
import { useRecoilState } from 'recoil'
import CartItem from '../components/CartItem';
import Text from '../components/Text';
import { cartAtom } from '../state/state';
import { Product } from "../types/types";

export default function cart() {
    const [cart, setcart] = useRecoilState(cartAtom)

    console.log(cart);

    return (
        <div className="px-5 bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex my-10 shadow-md">
                    <div className="w-3/4 px-10 py-10 bg-white">
                        <div className="flex justify-between pb-8 border-b">
                            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                            <h2 className="text-2xl font-semibold">3 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">Product Details</h3>
                            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Quantity</h3>
                            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Price</h3>
                            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Total</h3>
                        </div>

                        {
                            cart.map(item => <CartItem />)
                        }


                        <a href="#" className="flex mt-10 text-sm font-semibold text-indigo-600">

                            <svg className="w-4 mr-2 text-indigo-600 fill-current" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="pb-8 text-2xl font-semibold border-b">Order Summary</h1>

                        <div className="mt-8 border-t">
                            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-indigo-500 hover:bg-indigo-600">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
