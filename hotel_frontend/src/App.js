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
import SingleConferenceRoom from './pages/SingleConferenceRoom';
import ShoppingCart from './pages/ShoppingCart';
import Shop from './pages/Shop';
import SingleProductPage from './pages/SingleProductPage';
import RestaurantAndBars from './pages/RestaurantAndBars';
import SingleRestaurant from './pages/SingleRestaurant';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path="/about" element={<About />} />

        {/* Weddings and Events Route */}
        <Route path="/wedding-halls" element={<WeddingHalls />} />
        <Route path="/wedding-halls/:id" element={<SingleWeddingVenue />} />
        <Route path="/venue-booking/:venueid" element={<WeddingBooking />} />
        <Route path="/conference-rooms" element={<ConferenceRooms />} />
        <Route path="/conference-rooms/:id" element={<SingleConferenceRoom />} />

        {/* Commerce Route */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />

        {/* Restaurant and Bars */}
        <Route path="/restaurants" element={<RestaurantAndBars />} />
        <Route path="/restaurant/:id" element={<SingleRestaurant />} />

        {/* Rooms And Suites */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<SingleRoom />} />

        {/* <Route path="/profile" element={<Profile />} />
      <Route path="/booking/:hotelId" element={<Booking />} /> */}
      </Routes>
    </>
  )
}

export default App