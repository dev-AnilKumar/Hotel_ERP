import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setHotels } from '../features/hotelSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hotels = () => {
    const dispatch = useDispatch();
    //   const hotels = useSelector((state) => state.hotels.list);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // dispatch(setHotels(response.data));
                setHotels(response.data);
                console.log(hotels)
            })
            .catch((error) => console.error('Error fetching hotels:', error));
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-3xl font-semibold mb-6">All Hotels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {hotels && hotels.map((hotel) => (
                    <div key={hotel.id} className="bg-card shadow-card rounded-lg overflow-hidden">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.sWCvltMZF_s3mjA5sL-RdgHaE8&pid=Api&P=0&h=180" alt={hotel.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{hotel.name}</h3>
                            <p className="text-gray-500">{JSON.stringify(hotel.address)}</p>
                            <Link to={`/hotel/${hotel.id}`} className="text-primary hover:underline">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
