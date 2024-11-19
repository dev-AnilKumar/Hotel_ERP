import { Link } from "react-router-dom";

const SingleWeddingVenue = ({ wedding }) => {

    // axios request for single wedding venue or from store 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left Column */}
            <div>
                <div className="border-l-4 border-yellow-500 pl-4 mb-6">
                    <h6 className="text-gray-500">Grand Hotel</h6>
                    <h1 className="text-3xl font-bold text-gray-900">{wedding?.wedHallName}</h1>
                </div>
                <hr className="my-4 border-t-2 border-gray-300" />

                <div>
                    <h6 className="text-xl font-semibold text-gray-800">Amenities</h6>
                    <hr className="my-2 border-t-2 border-gray-300" />
                </div>

                <div>
                    <h6 className="text-xl font-semibold text-gray-800">Wedding Hall Description</h6>
                    <p className="text-gray-700">{wedding?.description}</p>
                </div>

                <div className="mt-4">
                    <h6 className="text-xl font-semibold text-gray-800">Number of Seats</h6>
                    <ul className="list-disc pl-6">
                        <li className="text-gray-700">{wedding?.seating} Seats</li>
                    </ul>
                </div>
            </div>

            {/* Right Column */}
            <div>
                <p className="font-bold text-lg text-gray-800 mb-4">
                    <span className="text-yellow-500">For More Information,</span> please call (+94) 76 666 3881
                </p>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="bg-gray-200 p-2 rounded-lg">
                            <b>Request a Proposal</b>
                        </li>
                        <li className="bg-gray-100 p-2 rounded-lg text-gray-600">
                            <p>Complete a simple form to let us know your event requirements and leave the planning to us.</p>
                        </li>
                        <li>
                            <Link to={`/venue-booking/${wedding?._id}`}>
                                <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                                    Request a Proposal
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleWeddingVenue;
