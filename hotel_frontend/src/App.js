import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import "./App.css"
import Hotels from './pages/Hotels';
import HotelProfile from './pages/HotelProfile';
import Navbar from './components/Navbar';
import LandingScreen from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelProfile />} />
        {/* <Route path="/profile" element={<Profile />} />
      <Route path="/booking/:hotelId" element={<Booking />} /> */}
      </Routes>
    </>
  )
}

export default App