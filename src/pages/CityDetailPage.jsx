// src/pages/DestinationDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCityById, getAllDestinationsByCityId } from '../api/data-services';

const CityDetailPage = () => {
    const { cityId } = useParams();
    const [city, setCity] = useState(null);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchCityDetail = async () => {
            try {
                const cityData = await getCityById(cityId);
                setCity(cityData);

                const destinationsData = await getAllDestinationsByCityId(cityId);
                setDestinations(destinationsData);
            } catch (error) {
                console.error('Error fetching city detail:', error);
            }
        };

        fetchCityDetail();
    }, [cityId]);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="city-detail-container">
            <h1 className="text-4xl font-bold mb-4">{city.name}</h1>
            <img src={city.image} alt={city.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-8">{city.description}</p>
            <h2 className="text-3xl font-bold mb-4">Destinations in {city.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* get all destination in detail of the city */}
                {destinations.map((destination) => (
                    <div key={destination.id} className="destination-card bg-white p-4 rounded shadow">
                        <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                        <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover mb-4" />
                        <p className="text-base">{destination.description}</p>
                        <p className="text-sm text-gray-600 mt-2">{destination.address}</p>
                        <Link to={`/city/${city.id}/detail/${destination.id}`} className="detail-button text-blue-500 underline mt-4 block">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CityDetailPage;