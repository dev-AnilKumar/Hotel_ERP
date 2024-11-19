import React from 'react'
import SliderCarousel from '../components/SliderCarousel'
import { Link } from 'react-router-dom'
import RoomCard from '../components/RoomCard'

const Rooms = () => {
    const rooms = [{
        imgSrc: "",
        _id: "4",
        name: "Royal Bar",
        type: "bar",
        maxcount: "3",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "4",
        name: "Royal Bar",
        type: "bar",
        maxcount: "3",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    },
    {
        imgSrc: "",
        _id: "4",
        name: "Royal Bar",
        type: "bar",
        maxcount: "3",
        email: "asjcgasjhg@gmail.cojm",
        location: "guravaf",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam magni aperiam, qui voluptatibus esse modi labore soluta eos iure dolore quas maxime nesciunt commodi dolores quis officia laborum itaque!"
    }];

    return (
        <>
            <SliderCarousel />
            {/* <div className="p-6 m-5 dark">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <RangePicker
                            style={{ height: "38px", width: "98%" }}
                            onChange={filterByDate}
                            format="DD-MM-YYYY"
                            className="m-2"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="form-control i2 m-2 border border-gray-300 rounded-lg p-2"
                            placeholder="Search Rooms"
                            value={searchkey}
                            onKeyUp={filterBySearch}
                            onChange={(e) => { setsearchkey(e.target.value) }}
                        />
                    </div>

                    <div>
                        <select
                            className="form-control m-2 border border-gray-300 rounded-lg p-2"
                            value={type}
                            onChange={(e) => { filterByType(e.target.value) }}
                        >
                            <option value="all">All</option>
                            <option value="Non-Deluxe">Non Deluxe</option>
                            <option value="deluxe">Deluxe</option>
                        </select>
                    </div>
                </div>
            </div> */}

            <div className="flex justify-center mt-5">
                {/* {loading ? (
                    <Loader />
                ) : ( */}
                <div className="w-full md:w-9/12 mt-2">
                    {rooms.map((room) => (
                        // <div className="flex flex-wrap mb-5 border-b border-gray-300 pb-5" key={room._id}>
                        //     <div className="w-full md:w-1/3">
                        //         <img src={room.imageUrls[0]} className="w-full h-auto rounded-lg" alt={room.name} />
                        //     </div>
                        //     <div className="w-full md:w-2/3 pl-4">
                        //         <h1 className="text-2xl font-bold">{room.name}</h1>
                        //         <div className="text-lg font-semibold mt-2">
                        //             <p>Max Count: {room.maxcount}</p>
                        //             <p>Type: {room.type}</p>
                        //         </div>

                        //         <div className="mt-4 flex justify-end space-x-4">
                        //             {(fromdate && todate) && (
                        //                 <Link to={`/roombook/${room._id}/${fromdate}/${todate}`}>
                        //                     <button className="btn btn-outline-warning px-4 py-2 rounded-lg text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white transition duration-200">
                        //                         Book Now
                        //                     </button>
                        //                 </Link>
                        //             )}

                        //             <Link to={`/room/${room._id}`}>
                        //                 <button className="btn btn-outline-warning px-4 py-2 rounded-lg text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white transition duration-200">
                        //                     View Details
                        //                 </button>
                        //             </Link>
                        //         </div>
                        //     </div>
                        // </div>
                        <RoomCard room={room} />
                    ))}
                </div>
                {/* )} */}
            </div>
        </>

    )
}

export default Rooms