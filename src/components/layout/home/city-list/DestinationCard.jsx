// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ image, name, description, }) => {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="btn">Explore</a>
        </div>
    );
};

export default DestinationCard;
