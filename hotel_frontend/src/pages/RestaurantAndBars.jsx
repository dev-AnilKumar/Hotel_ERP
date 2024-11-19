import React from 'react'
import SliderCarousel from '../components/SliderCarousel';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantAndBars = () => {

    const restaurants = [{
        imgSrc: "",
        _id: "1",
        name: "Royal Hall",
        type: "restaurant",
        phoneNo: "4455887799",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "2",
        name: "Royal Hall",
        type: "restaurant",
        phoneNo: "4455887799",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "3",
        name: "Royal Glash",
        type: "bar",
        phoneNo: "4455887799",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "4",
        name: "Royal Bar",
        type: "bar",
        phoneNo: "4455887799",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    }];
    return (
        <>
            <SliderCarousel />
            <h1 className="text-center text-3xl font-semibold mb-8">RESTAURANTS & Bars</h1>
            {/* {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : ( */}
            <div className="bg-[#eaeaf7] py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant._id} className="flex justify-center">
                            <RestaurantCard restaurant={restaurant} />
                        </div>
                    ))}
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default RestaurantAndBars