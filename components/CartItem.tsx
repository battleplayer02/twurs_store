import React from 'react'

export default function CartItem() {
    return (
        <div className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                </div>
                <div className="flex flex-col justify-between flex-grow ml-4">
                    <span className="text-sm font-bold">Iphone 6S</span>
                    <span className="text-xs text-red-500">Apple</span>
                    <a href="#" className="text-xs font-semibold text-gray-500 hover:text-red-500">Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <svg className="w-3 text-gray-600 fill-current" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="w-8 mx-2 text-center border" type="text" value="1" />

                <svg className="w-3 text-gray-600 fill-current" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="w-1/5 text-sm font-semibold text-center">$400.00</span>
            <span className="w-1/5 text-sm font-semibold text-center">$400.00</span>
        </div>

    )
}
