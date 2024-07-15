/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const CustomCard = ({ attraction, description, imageSrc, buttonText }) => {
    return (
        <div className="mt-6 w-96 shadow-lg rounded-lg overflow-hidden bg-white">
            <div className="relative h-56">
                <img
                    src={imageSrc}
                    alt="card-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{attraction}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="p-4 bg-blue-50">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

CustomCard.propTypes = {
    attraction: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default CustomCard;
