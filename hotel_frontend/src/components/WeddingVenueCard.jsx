import { Link } from 'react-router-dom';

const WeddingVenueCard = ({ wedding }) => {
    return (
        <div className="my-3 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link to={`/wedding/${wedding._id}`}>
                <img
                    className="w-full h-64 object-cover rounded-t-lg"
                    src={wedding.imgSrc}
                    alt={wedding.wedHallName}
                />
            </Link>

            <div className="p-4 bg-white rounded-b-lg">
                <div className="text-center">
                    <Link to={`/restaurant/${wedding._id}`}>
                        <h1 className="text-xl font-semibold text-gray-900">{wedding.wedHallName}</h1>
                        <h6 className="text-md text-gray-600 mt-2">Seating:{wedding.seating}, Max Capacity:{wedding.maxCapacity} Seats</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WeddingVenueCard;
