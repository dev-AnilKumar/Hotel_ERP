import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, fromdate, todate }) => {
    return (
        <div className="flex flex-wrap gap-6 mb-6" key={room?._id}>
            {/* Image Section */}
            <div className="w-full md:w-1/3">
                <img
                    src={room?.imgSrc}
                    alt={room?.name}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Room Details Section */}
            <div className="w-full md:w-2/3">
                <h1 className="text-2xl font-semibold mb-2">{room?.name}</h1>
                <div className="font-bold text-lg mb-4">
                    <p>Max Count: {room?.maxcount}</p>
                    <p>Type: {room?.type}</p>
                </div>

                <div className="flex justify-end gap-4">
                    {/* Book Now Button */}
                    {(fromdate && todate) && (
                        <Link to={`/roombook/${room?._id}/${fromdate}/${todate}`}>
                            <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md transition duration-300">
                                Book Now
                            </button>
                        </Link>
                    )}

                    {/* View Details Button */}
                    <Link to={`/room/${room?._id}`}>
                        <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md transition duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
