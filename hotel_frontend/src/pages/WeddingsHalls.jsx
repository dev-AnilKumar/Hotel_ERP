import React from 'react';
import WeddingVenueCard from '../components/WeddingVenueCard';
import SliderCarousel from '../components/SliderCarousel';
// import WedSearch from './WedSearch'; // Assuming you have a WedSearch component
// import WeddingDis from './WeddingDis'; // Assuming you have a WeddingDis component
// import Loader from './Loader'; // Assuming you have a Loader component
// import Message from './Message'; // Assuming you have a Message component

const WeddingHalls = ({ loading, error,
    // weddings
}) => {
    const wedding = {
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    };

    return (
        <>
            <SliderCarousel />
            <div className="px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Wedding Halls</h1>

                {/* Centered Wedding Search */}
                {/* <div className="flex justify-center mb-6">
        <WedSearch />
      </div> */}

                {/* Loading, Error or Wedding Display */}
                {/* {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : ( */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* {weddings.map((wedding) => ( */}
                    <div key={wedding._id}>
                        <WeddingVenueCard wedding={wedding} />
                    </div>
                    {/* ))} */}
                </div>
                {/* )} */}
            </div>
        </>

    );
};

export default WeddingHalls;
