// src/pages/DestinationDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCityById, getAllDestinationsByCityId, getDestinationById, } from '../api/data-services';

const DestinationDetailPage = () => {
    const { cityId, destinationId } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        const fetchDestinationDetail = async () => {
            try {
                const destinationData = await getDestinationById(cityId, destinationId);
                setDestination(destinationData);
            } catch (error) {
                console.error('Error fetching destination detail:', error);
            }
        };

        fetchDestinationDetail();
    }, [cityId, destinationId]);

    if (!destination) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className="destination-detail-container">
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-8">{destination.description}</p>
            <p className="text-base">{destination.address}</p>
        </div>
    );
};

export default DestinationDetailPage;
