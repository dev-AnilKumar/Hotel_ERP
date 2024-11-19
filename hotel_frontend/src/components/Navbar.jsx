import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const Navbar = () => {
    // const userInfo={
    //     name:"anil",
    //     isAdmin:"false"
    // }
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const userInfo = null;
    return (
        <nav className="bg-gray-900 py-3 px-8 fixed top-0 left-0 z-[999] w-full">
            <div className="container mx-auto flex items-center justify-between">
                <a className="text-white flex items-center" href="/">
                    {/* <img src="" alt="Grand Hotel" className="w-24 h-10" /> */}
                    <span className="ml-2 text-xl font-semibold">Aviator</span>
                </a>

                <div className="flex justify-center">
                    <ul className="flex gap-8">
                        <li className="nav-item">
                            <Link to="/rooms" className="text-white hover:text-gray-400 font-semibold">
                                Rooms & Suites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/restaurants" className="text-white hover:text-gray-400 font-semibold" >
                                Restaurant & Bars
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="text-white hover:text-gray-400 font-semibold" >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item relative">
                            {/* Button to trigger dropdown */}
                            <button
                                onClick={toggleDropdown}
                                className="text-white flex gap-1 items-center hover:text-gray-400 font-semibold"
                            >
                                Wedding & Events {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </button>

                            {/* Dropdown menu with smooth animations */}
                            <ul
                                className={`${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                    } transition-all duration-300 ease-in-out absolute left-0 bg-[#282828] text-white rounded-md shadow-md mt-2 w-48`}
                                style={{ display: isOpen ? 'block' : 'none' }}
                            >
                                <li>
                                    <Link
                                        to="/wedding-halls"
                                        className="block px-4 py-2 hover:bg-gray-700"
                                        onClick={toggleDropdown}
                                    >
                                        Wedding Planning
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/conference-rooms"
                                        className="block px-4 py-2 hover:bg-gray-700"
                                        onClick={toggleDropdown}
                                    >
                                        Meetings
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="text-white hover:text-gray-400 font-semibold" >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="hidden lg:flex space-x-6">
                    <Link to="/cart" className="text-white flex gap-2 items-center hover:text-gray-400">
                        <FaCartShopping /> Cart
                    </Link>
                    {userInfo ? (
                        <div className="relative">
                            <button className="text-white flex items-center hover:text-gray-400">
                                {userInfo.name}
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                                <button onClick className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="text-white flex items-center hover:text-gray-400">
                            <i className="fa fa-user-circle mr-2"></i> Login
                        </Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                        <div className="relative">
                            <button className="text-white flex items-center hover:text-gray-400">Admin</button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <Link to="/wedEveMgt" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Wedding & Event Management</Link>
                                <Link to="/roomManagement" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Room Management</Link>
                                <Link to="/restaurantManagement" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Restaurant Management</Link>
                                <Link to="/foodManagement" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Food Management</Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Navbar */}
                <div className="lg:hidden">
                    <button className="text-white flex items-center">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
