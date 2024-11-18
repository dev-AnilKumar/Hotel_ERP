import React from 'react'
import ConferenceRoomCard from '../components/ConferenceRoomCard';

const ConferenceRooms = ({
    // conference, 
    loading, error }) => {
    const conferencerooms = [{
        imgSrc: "",
        _id: "1",
        confRoomName: "Angel Conference Room",
        confRoomSeats: "10",
        confRoomPrice: "5000"
    },
    {
        imgSrc: "",
        _id: "2",
        confRoomName: "Arya Conference Room",
        confRoomSeats: "12",
        confRoomPrice: "7000"
    }]
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-center text-3xl font-semibold mb-4">Conference Rooms</h1>

            <div className="text-center mb-8">
                {/* <ConSearch /> */}
            </div>

            {/* {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : ( */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferencerooms.map((item) => (
                    <div key={conf._id} className="bg-white p-4 rounded-lg shadow-lg">
                        <ConferenceRoomCard conference={item} />
                    </div>
                ))}
            </div>
            {/* )} */}
        </div>
    );
};

export default ConferenceRooms