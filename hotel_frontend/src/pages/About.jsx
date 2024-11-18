import React from 'react'

const About = () => {
    return (
        <div className="px-4 md:px-16">
            {/* ABOUT Section */}
            <div className="flex flex-col md:flex-row items-start justify-between mb-12">
                <div className="md:w-1/2 pl-4">
                    <h1 className="text-3xl font-bold mb-4">ABOUT</h1>
                    <h6 className="text-lg mb-4">
                        A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La's own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene, and the largest and most extensive hotel conference and event facilities.
                    </h6>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><h6 className="text-lg">541 rooms and suites</h6></li>
                        <li><h6 className="text-lg">Unrivalled shopping experience in Sri Lanka's leading shopping mall</h6></li>
                        <li><h6 className="text-lg">Shangri-La Cares: Our commitment to your well-being in our care</h6></li>
                    </ul>
                    <button className="mt-6 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src="max2.jpg" alt="Shangri-La" className="w-3/4 mx-auto" />
                </div>
            </div>

            <hr className="my-12" />

            {/* Recommended Room Types Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Recommended Room Types</h1>
                <p className="text-lg mb-8">
                    Offering striking views of the Indian Ocean, Beira Lake, and the city beyond, our 500 guest rooms and suites, and 41 serviced apartments are tastefully furnished to complement the urban-oceanside location and are among the largest in Colombo.
                </p>
                {/* <SilderCarousel /> */}
            </div>

            <hr className="my-12" />

            {/* Discover Your Shangri-La Experiences Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Discover Your Shangri-La Experiences</h1>
                <p className="text-lg mb-8">
                    Plan an ideal staycation complete with complimentary breakfast, spa or dining credits, or even all-day access to Adventure Zone for the kids. We have everyone in the family's well-being in mind.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="max3.jpg" alt="Shangri-La Experiences" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 pl-4">
                    <h1 className="text-3xl font-bold mb-4">Savour Shangri-La</h1>
                    <p className="text-lg mb-4">
                        Recreate special Shangri-La dining experiences from the comfort of your home. Enjoy our collection of signature dishes delivered straight to your doorstep.
                    </p>
                    <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            <hr className="my-12" />

            {/* Meetings & Events Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="max4.jpg" alt="Meetings & Events" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 pl-4">
                    <h1 className="text-3xl font-bold mb-4">Meetings & Events</h1>
                    <p className="text-lg mb-4">
                        Shangri-La Hotel, Colombo has the most extensive and versatile event spaces in Sri Lanka. It offers a range of flexible venues, including the signature Shangri-La Ballroom, the largest pillar-less ballroom in Sri Lanka.
                    </p>
                    <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            <hr className="my-12" />

            {/* Wedding Planning Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="max5.jpg" alt="Wedding Planning" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 pl-4">
                    <h1 className="text-3xl font-bold mb-4">Wedding Planning</h1>
                    <p className="text-lg mb-4">
                        The city's sought-after location for weddings, Shangri-La Hotel, Colombo offers unique and luxuriously styled venues with a dedicated team who will help make your special day a memorable one.
                    </p>
                    <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            <hr className="my-12" />

            {/* Offers Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Offers</h1>
            </div>

            <div className="flex flex-wrap gap-8 justify-between">
                <div className="w-full md:w-1/3">
                    <img src="max11.jpg" alt="Offer 1" className="w-full h-1/2 object-cover" />
                    <h1 className="text-2xl font-semibold my-4">Rooms & Suites</h1>
                    <p>01 Feb 2021 - 31 Dec 2021 Book Early and Save with Flexibility. Book in advance and save up to 20% with complimentary date changes.</p>
                    <button className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>

                <div className="w-full md:w-1/3">
                    <img src="max8.jpg" alt="Offer 2" className="w-full h-1/2 object-cover" />
                    <h1 className="text-2xl font-semibold my-4">Rooms & Suites</h1>
                    <p>Suite Celebrations. Stay a little longer, see a little more! From LKR 31,932.80 Average Per Night. View Details.</p>
                    <button className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>

                <div className="w-full md:w-1/3">
                    <img src="max10.jpg" alt="Offer 3" className="w-full h-1/2 object-cover" />
                    <h1 className="text-2xl font-semibold my-4">Rooms & Suites</h1>
                    <h4 className="text-xl font-semibold mb-4">Bed & Breakfast</h4>
                    <p>Start your day with stunning views of Colombo and daily breakfast.</p>
                    <button className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            <hr className="my-12" />
        </div>
    );
};

export default About