// src/components/DestinationsSection.jsx
import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import API_ENDPOINT from "../../../../globals/api-endpoints

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <h2>Top Destinations</h2>
        <div className="destination-cards">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              name={destination.name}
              description={destination.description}
              link={`/city/${destination.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
