import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCities } from '../../api/data-services';

const CityList = () => {
    const [cities, setCities] = useState([]);
  
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const citiesData = await getAllCities();
          console.log('Fetched Cities:', citiesData);
          if (citiesData && Array.isArray(citiesData.cities)) {
            setCities(citiesData.cities);
          } else {
            console.error('Fetched data is not an array:', citiesData);
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
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
            <h2 className="text-2xl lg:text-3xl font-bold">{city.name}</h2>
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover mt-4 mb-4" />
            <p className="text-sm lg:text-base">{city.description}</p>
            <Link to={`/city/${city.id}`} className="text-blue-500 underline mt-4 block">View Details</Link>
          </div>
        ))}
      </div>
    );
};

export default CityList;
