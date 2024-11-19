import React from 'react'
import { Link } from 'react-router-dom';

const ConferenceRoomCard = ({ conference }) => {
    return (
        <Link to={`/conference-rooms/${conference._id}`}>
            <div className="my-4 p-4 rounded-lg border border-gray-300 shadow-lg">
                <img
                    className="w-full h-64 object-cover rounded-t-lg"
                    src={conference.imgSrc}
                    alt={conference.confRoomName}
                />

                <div className="text-center py-4">
                    <div className="text-decoration-none">
                        <h1 className="text-xl font-semibold text-gray-800">{conference.confRoomName}</h1>
                        <p className="text-sm text-gray-600">Maximum Capacity: {conference.conSeats} Seats</p>
                        <p className="text-sm text-gray-600">Price Per Hour: RS. {conference.conPrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ConferenceRoomCard