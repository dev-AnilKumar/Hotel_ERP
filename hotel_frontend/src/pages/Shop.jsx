import React from 'react'
import ShopItemCard from '../components/ShopItemCard';

const Shop = ({ loading, error, foods }) => {
    const items = [{
        imgSrc: "",
        _id: "1",
        itemName: "Angel Conference Room",
        confRoomSeats: "10",
        itemPrice: "5000",
        features: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!",
    },
    ]
    return (
        <div className="p-6">
            <h1 className="text-center text-3xl font-semibold mb-6">MENU</h1>

            {/* {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : ( */}
            <div className="flex flex-wrap justify-around bg-[#eaeaf7] p-6">
                {items.map((item) => (
                    <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <ShopItemCard item={item} />
                        </div>
                    </div>
                ))}
            </div>
            {/* )} */}
        </div>
    );
};

export default Shop