// src/pages/HotelDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentHotel } from '../features/hotelSlice';
import axios from 'axios';

const HotelProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    //   const hotel = useSelector((state) => state.hotels.currentHotel);
    const [hotel, sethotel] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                // dispatch(setCurrentHotel(response.data));
                sethotel(response.data)

            })
            .catch((error) => console.error('Error fetching hotel details:', error));
    }, [id]);

    if (!hotel) return <div>Loading...</div>;

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.sWCvltMZF_s3mjA5sL-RdgHaE8&pid=Api&P=0&h=180" alt={hotel.name} className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div>
                    <h1 className="text-4xl font-semibold mb-4">{hotel.name}</h1>
                    <p className="text-gray-600 mb-4">{hotel.phone}</p>
                    <p className="text-lg mb-6">{JSON.stringify(hotel.address)}</p>

                    <Link to={`/booking/${hotel.id}`} className="bg-primary text-white px-6 py-3 rounded-full">
                        Book a Room
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelProfile;
