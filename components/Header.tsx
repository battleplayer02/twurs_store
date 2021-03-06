import { useState } from "react"
import Link from 'next/link'
import { totalitems } from "../state/state";
import { useRecoilValue } from "recoil";
const Header = () => {

    const count = useRecoilValue(totalitems);
    const [toggle, settoggle] = useState<boolean>(false)

    function toggleMenu() {
        settoggle(!toggle)
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0">
                            <h6 className="p-2 bg-gray-300 rounded">Twrus Tech Shop</h6>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex ml-10 space-x-4">
                                <Link href="/shop">
                                    <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                                        Shop
                                    </a>
                                </Link>
                                <Link href="/login">
                                    <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                                        Login
                                    </a>
                                </Link>
                                <Link href="/cart">
                                    <a className="relative px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                                        Cart
                                        <span className="absolute bottom-0 flex items-center justify-center w-5 h-5 p-1 text-xs leading-5 text-center bg-red-600 rounded-full -right-2">{count}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}>

                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {toggle && <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/shop">
                        <a
                            className="block px-3 py-2 font-medium text-white rounded-md hover:bg-gray-700">
                            Shop
                        </a>
                    </Link>
                    <Link href="/login">
                        <a
                            className="block px-3 py-2 font-medium text-white rounded-md hover:bg-gray-700">
                            Login
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a className="relative block px-3 py-2 font-medium text-white rounded-md hover:bg-gray-700">
                            Cart
                            <span className="absolute bottom-0 flex items-center justify-center w-5 h-5 p-1 text-xs leading-5 text-center bg-red-600 rounded-full left-12">{count}</span>
                        </a>
                    </Link>
                </div>
            </div>
            }
        </nav>
    )
}

export default Header
