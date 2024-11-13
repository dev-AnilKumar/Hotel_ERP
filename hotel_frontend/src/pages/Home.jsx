import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary text-white text-center p-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Hotel Finder</h1>
        <p className="text-xl mb-8">Find your next perfect stay with us!</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for hotels, cities, etc."
          className="w-1/3 p-4 text-black rounded-lg"
        />
        <Link to={`/hotels?search=${search}`} className="mt-4 inline-block bg-secondary text-white px-6 py-3 rounded-full">
          Search Hotels
        </Link>
      </section>
    </div>
  );
};

export default Home;
