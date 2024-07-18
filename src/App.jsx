import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionBg from './assets/images/images-1.webp';
import { getAllCities } from './api/data-services';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getAllCities();
      console.log('Fetched Cities:', citiesData); // Debugging line
      if (citiesData && Array.isArray(citiesData.cities)) {
        setCities(citiesData.cities);
      } else {
        console.error('Fetched data is not an array:', citiesData);
      }
    };

    fetchCities();
  }, []);

  if (!Array.isArray(cities)) {
    return <div>Error: Cities data is not an array.</div>;
  }

  return (
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city) => (
        <div key={city.id} className="card bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold">{city.name}</h2>
          <img src={city.image} alt={city.name} className="w-full h-48 object-cover mt-4 mb-4" />
          <p>{city.description}</p>
          <Link to={`/city/${city.id}`} className="text-blue-500 underline mt-4 block">View Details</Link>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-gray-100">
        <section id="section-1" className="relative bg-cover bg-center h-96 " style={{ backgroundImage: `url(${SectionBg})` }}>
          <div className="container mx-auto flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Epic Indonesia</h1>
              <p className="text-xl mb-8">Explore the beauty of Indonesian cities</p>
            </div>
          </div>
        </section>
        <section id="products" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Explore The City</h2>
            <CityList />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
