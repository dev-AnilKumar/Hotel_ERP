import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home';
import "./App.css"
// import Hotels from './pages/Hotels';
import HotelProfile from './pages/HotelProfile';
import Navbar from './components/Navbar';
import LandingScreen from './pages/LandingPage';
import About from './pages/About';
import WeddingHalls from './pages/WeddingsHalls';
import SingleWeddingVenue from './pages/SingleWeddingVenue';
import WeddingBooking from './pages/WeddingBooking';
import ConferenceRooms from './pages/ConferenceRooms';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/wedding-halls" element={<WeddingHalls />} />
        <Route path="/wedding-halls/:id" element={<SingleWeddingVenue />} />
        <Route path="/venue-booking/:venueid" element={<WeddingBooking />} />
        <Route path="/conference-rooms" element={<ConferenceRooms />} />
        {/* <Route path="/room" element={<HotelProfile />} /> */}
        {/* <Route path="/profile" element={<Profile />} />
      <Route path="/booking/:hotelId" element={<Booking />} /> */}
      </Routes>
    </>
  )
}

export default App