import React from 'react'

const RestaurantAndBars = () => {

    const restaurants = [{
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "2",
        wedHallName: "Royal Hall",
        maxCapacity: "900",
        seating: "600",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    }];
    return (
        <>
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
                            <Rest restaurant={restaurant} />
                        </div>
                    ))}
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default RestaurantAndBars