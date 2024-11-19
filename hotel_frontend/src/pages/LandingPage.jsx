import React from 'react';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
    return (
        <div className="relative">
            <div className="landing bg-cover bg-center text-center py-20 h-screen" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677626706034-86c0e5387ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfDB8MHx8fDA%3D)' }}>
                <div className="flex justify-center items-center h-full px-4 md:px-12">
                    <div className="text-white max-w-3xl w-full text-center border-r-8 border-white pr-12 md:pr-0">
                        <h2 className="text-6xl md:text-8xl font-bold mb-6" data-aos="zoom-in">
                            Grand Hotel
                        </h2>
                        <h1 className="text-2xl md:text-4xl mb-8" data-aos="zoom-out">
                            “There is only one boss. The Guest.”
                        </h1>
                        <Link to="/rooms">
                            <button className="px-6 py-2 text-lg border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md transition duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;
