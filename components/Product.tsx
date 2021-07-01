import React, { useState } from 'react'
import { useRecoilState } from 'recoil';

import { cartAtom } from '../state/state';
import { Product as ProductType } from "../types/types";




const Product = (props: { productDetails: ProductType }) => {
    const { productDetails } = props;
    // console.log(productDetails);
    const [quantity, setquantity] = useState<number>(1);
    const [cart, setcart] = useRecoilState(cartAtom)



    const handleClick = (val: number) => {
        if (val + quantity <= productDetails.quantity && val + quantity > 0) {
            setquantity(val + quantity)
        }
    }


    const addtoCart = () => {
        setcart([...cart, { ...productDetails, quantity }])
        console.log(cart);

    }



    return (
        <div className="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/4">
            <div className="block overflow-hidden bg-white rounded-lg shadow-md c-card hover:shadow-xl">
                <div className="relative pb-48 overflow-hidden">
                    <img className="product-image" src={productDetails.image} alt="" />
                </div>
                <div className="p-4">
                    <h2 className="mt-2 mb-2 font-bold">{productDetails.name}</h2>
                    <p className="text-sm">{productDetails.description}</p>
                    <div className="flex items-center mt-3">
                        <span className="text-lg font-semibold">₹</span>&nbsp;<span className="text-lg font-bold">{productDetails.price}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full p-4 text-xs text-gray-700 border-t border-b">
                    <span className="flex items-center justify-between mb-1">
                        <span>Quantity: {productDetails.quantity}</span>
                    </span>
                    <span className="flex items-center justify-between mb-1">
                        <button className="flex justify-center w-5 p-1 text-white bg-blue-500 rounded" onClick={() => { handleClick(1) }}>+</button>
                        <span className="ml-2 mr-2 font-extrabold"> {quantity} </span>
                        <button className="flex justify-center w-5 p-1 text-white bg-red-500 rounded" onClick={() => { handleClick(-1) }}>-</button>
                    </span>

                </div>
                <div className="w-full p-4 border-t border-b">
                    <button className="w-full px-4 py-2 font-semibold text-blue-700 border border-b-4 border-blue-500 rounded "
                        onClick={addtoCart}>
                        Add To Cart
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Product