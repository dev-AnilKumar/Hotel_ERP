import React, { useState } from 'react';
import Swal from 'sweetalert2';


const SingleConferenceRoom = ({ conference, loading, error }) => {
    const [hrs, setHrs] = useState(1);
    // axios request for single wedding venue or from store 

    const handleBooking = () => {
        // Implement the booking logic
        Swal.fire('Booked!', 'Your conference room is booked.', 'success');
    };

    return (
        <div>
            {/* {loading ? (
                <h1 className="text-center text-xl font-bold">Loading...</h1>
            ) : error ? (
                <h1 className="text-center text-xl font-bold text-red-500">Error....</h1>
            ) : ( */}
            <>
                <div className="container mx-auto px-4">
                    {/* Carousel Section */}

                    {/* Conference Room Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                            <div className="mb-4">
                                <h6 className="text-lg text-gray-500">Grand Hotel</h6>
                                <h1 className="text-3xl font-bold">{conference?.confRoomName}</h1>
                            </div>
                            <hr />
                            <h6 className="mt-4 text-xl font-semibold">Amenities</h6>
                            <hr />
                            <h6 className="mt-4 text-xl font-semibold">Conference Room Description</h6>
                            <p>{conference?.description}</p>
                            <h6 className="mt-4 text-xl font-semibold">Number of Seats</h6>
                            <p>{conference?.confRoomSeats} Seats</p>
                            <h6 className="mt-4 text-xl font-semibold">Conference Room Features</h6>
                            <p>{conference?.features}</p>
                            <h6 className="mt-4 text-xl font-semibold">Price Per Hour</h6>
                            <p>RS.{conference?.confRoomPrice} Per Hour</p>
                        </div>

                        {/* Right Column */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <p className="mb-4 text-lg font-semibold">
                                <b>For More Information, please call (+94) 76 666 3881</b>
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-lg font-semibold">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="hours" className="text-lg font-semibold">Number of Hours</label>
                                    <input
                                        type="number"
                                        id="hours"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={hrs}
                                        onChange={(e) => setHrs(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold">
                                        Total Price: Rs.{conference?.confRoomPrice * hrs}
                                    </h5>
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
                            >
                                {/* Implement stripe logic */}
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </>
            {/* )} */}
        </div>
    );
};

export default SingleConferenceRoom