import React from 'react'

const SingleRoom = () => {
    return (
        <>
            {/* {loading ? (
                    <Loader />
                ) : error ? (
                    <Message />
                ) : ( */}
            <div className="container mx-auto px-4">
                <div className="bn" data-aos="zoom-in">
                    <div className="mb-8">
                        <div className="w-full">
                            <div className="carousel w-full">
                                {rooms?.imageUrls && rooms?.imageUrls.map((url, index) => (
                                    <div key={index} className="carousel-item">
                                        <img
                                            src={url}
                                            className="w-full h-[500px] object-cover rounded-lg"
                                            alt={`Room Image ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8">
                        {/* Left Column */}
                        <div className="w-full md:w-2/3">
                            <div className="mb-6">
                                <h6 className="text-lg text-gray-600">Grand Hotel Colombo</h6>
                                <h1 className="text-3xl font-bold text-[#daa520]">{rooms?.name}</h1>
                            </div>

                            <div className="mb-4">
                                <h6 className="font-semibold text-lg text-gray-700">Amenities</h6>
                                <hr className="border-t-2 border-gray-300 mb-4" />
                                <h6 className="font-semibold text-lg text-gray-700">About The Room</h6>
                                <p className="text-gray-700 mb-4">{rooms?.description}</p>

                                <h6 className="font-semibold text-lg text-gray-700">Features</h6>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>{rooms?.features1}</li>
                                    <li>{rooms?.features2}</li>
                                    <li>{rooms?.features3}</li>
                                    <li>{rooms?.features4}</li>
                                    <li>{rooms?.features5}</li>
                                </ul>

                                <h6 className="font-semibold text-lg text-gray-700 mt-6">Bath & Personal Care</h6>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Walk-in shower and/or separate bathtub</li>
                                    <li>Bathroom mirror</li>
                                    <li>Plush bathrobes and slippers</li>
                                    <li>300 thread count linen</li>
                                    <li>Pillow menu with hypoallergenic options</li>
                                    <li>Iron and ironing board</li>
                                </ul>

                                <h6 className="font-semibold text-lg text-gray-700 mt-6">Media & Entertainment</h6>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>High-speed Internet access</li>
                                    <li>Flatscreen TV</li>
                                    <li>Wide selection of international and local television channels</li>
                                </ul>

                                <h6 className="font-semibold text-lg text-gray-700 mt-6">Refreshments</h6>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Minibar</li>
                                    <li>Water</li>
                                    <li>Tea and coffee making facilities</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full md:w-1/3">
                            <p className="text-lg font-semibold mb-4">
                                <b>For reservation, please call (+94) 11 357 1446</b>
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <ul className="space-y-2 text-gray-700">
                                    <li><b>Details</b></li>
                                    <li><b>Max Count:</b> {rooms?.maxcount}</li>
                                    <li><b>Room Type:</b> {rooms?.type}</li>
                                    <li><b>From:</b> LKR {rooms?.rentperday}/= Average Per Night</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h6 className="font-semibold text-lg text-gray-700">Children's meal plan for guests staying at the hotel.</h6>
                        <p className="text-gray-700 mt-2">
                            The following children's meal plan is applicable for all Golden Circle members. When accompanied by a dine-in adult, up to 2 children of registered in-house hotel guests at the age of 6 and below can enjoy buffet meals at the all-day dining venues at no additional charge. Additional children at the age of 6 and below and all children who are above 6 years of age but under 12 years of age will receive a 50% discount on the adult buffet price. Registered in-house hotel guests can also join Golden Circle at any time during their stay to enjoy the meal plan. Children of non-registered walk-in guests under the age of 12 will receive a 50% discount on buffet meals at the all-day dining outlets.
                        </p>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default SingleRoom