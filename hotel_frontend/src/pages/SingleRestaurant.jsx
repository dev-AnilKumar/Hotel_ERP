import React from 'react'

const SingleRestaurant = ({restaurants, bookNowHandler}) => {
  return (
    <>
      <div>
        {/* {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error...</h1>
        ) : ( */}
        <div className="container mx-auto px-4">
          <div className="bn">
            <div className="w-full">
              <div className="relative">
                <div className="carousel w-full">
                  {restaurants?.images &&
                    restaurants?.images.map((url, index) => (
                      <div key={index} className="carousel-item">
                        <img
                          src={url}
                          alt="Restaurant Image"
                          className="w-full h-[500px] object-cover rounded-lg"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-8">
              <div className="w-full lg:w-2/3 px-4">
                <div className="border-l-4 border-[#daa520] pl-4">
                  <div className="title mb-4">
                    <h6 className="text-lg text-gray-600">Grand Hotel</h6>
                    <h1 className="text-3xl font-bold text-[#daa520]">{restaurants?.name}</h1>
                  </div>
                  <hr className="border-t-2 border-gray-300 mb-4" />

                  <div className="about">
                    <h6 className="text-lg text-gray-600">The authentic Chinese restaurant in the city</h6>
                    <hr className="border-t-2 border-gray-300 my-4" />

                    <p className="text-gray-700">
                      Grand Hotel’s signature Chinese restaurant Shang Palace celebrates cuisine steeped in rich tradition. The décor is inspired from Beijing’s traditional siheyuan houses and blends beautifully with modern luxury.
                    </p>
                    <p className="text-gray-700">
                      At Shang Palace we invite you to enjoy the varied flavours of Dongbei, Sichuan and Canton. Succulent meats, fresh seafood, delicate dim sum, a range of Chinese teas and cocktails all feature in our extensive menu, allowing you to indulge in a true feast.
                    </p>
                    <p className="text-gray-700">
                      Our weekday lunch set menu features intricate delicacies including flavourful soups, the finest dim sum, meats, seafood, rice and noodles. Available from Tuesday to Friday‬.
                    </p>
                    <p className="text-gray-700">Location - Level 3</p>
                    <p className="text-gray-700">Lunch - 12 noon to 3pm, Monday to Sunday</p>
                    <p className="text-gray-700">Dinner - 6.30pm to 11pm, Monday to Sunday</p>
                    <p className="text-gray-700">Weekend Yum Cha Lunch - 12noon to 3pm, Saturday and Sunday</p>
                    <p className="text-gray-700">{restaurants?.description}</p>
                  </div>

                  <hr className="border-t-2 border-gray-300 mt-4" />
                </div>
              </div>

              <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
                <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <button
                      onClick={bookNowHandler}
                      className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                      Book Now!
                    </button>
                  </div>

                  <form className="space-y-4">
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Name</p>
                      <p>{restaurants?.name}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Type</p>
                      <p>{restaurants?.type}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Tables</p>
                      <p>{restaurants?.tables}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Phone Number</p>
                      <p>{restaurants?.phoneNo}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Email</p>
                      <p>{restaurants?.email}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Location</p>
                      <p>{restaurants?.location}</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Opening Hours</p>
                      <p>Breakfast: 8.00a.m to 10.30a.m</p>
                      <p>Lunch: 11.30a.m to 4.30p.m</p>
                      <p>Dinner: 5.00p.m to 11.30p.m</p>
                      <p>Weekend Yum Cha Saturday and Sunday 12pm - 3pm</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Dress Code</p>
                      <p>Smart Casual</p>
                    </div>
                    <div className="title text-lg font-semibold text-gray-700">
                      <p>Smoking Policy</p>
                      <p>No smoking permitted</p>
                    </div>
                  </form>
                </div>

                <hr className="border-t-2 border-yellow-500 my-6 w-1/2 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </>

  )
}

export default SingleRestaurant