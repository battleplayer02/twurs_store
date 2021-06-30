import { useState } from "react"

const Header = () => {

    const [toggle, settoggle] = useState<boolean>(false)

    function toggleMenu() {
        settoggle(!toggle)
    }

    return (
        <nav className="bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h6 className="p-1 bg-gray-100 rounded">Twrus Tech Shop</h6>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex ml-10 space-x-4">
                                <a
                                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                                    Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >

                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {toggle && <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        className="block px-3 py-2 font-medium text-white rounded-md hover:bg-gray-700">
                        Dashboard
                    </a>
                </div>
            </div>
            }
        </nav>
    )
}

export default Header
