import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBg from "./assets/images/images-1.webp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-gray-100">
        <section id="section-1" className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${SectionBg})` }}>
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Epic Indonesia</h1>
              <p className="text-xl mb-8">asdasdasdsa</p>
            </div>
          </div>
        </section>
        <section id="products" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Explore The City</h2>
            <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* {cities.map(city => (
                <div key={city.id} className="card-item bg-black shadow-lg rounded-lg overflow-hidden">
                  <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">See Details</button>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
