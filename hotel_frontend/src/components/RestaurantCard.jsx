import React from 'react'

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link to={`/restaurant/${restaurant._id}`}>
            <div>
                <div className="my-3 p-3 rounded-lg border shadow-md">
                    <img className="w-full h-auto rounded-t-lg" src={restaurant.imgSrc} alt={restaurant.name} />

                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-[#daa520]">{restaurant.name}</h3>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default RestaurantCard