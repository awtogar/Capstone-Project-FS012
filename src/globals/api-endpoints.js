// src/globals/api-endpoints.js
import CONFIG from './config';

const API_ENDPOINT = {
    GET_ALL_CITIES: `${CONFIG.BASE_URL}${CONFIG.CITY_ENDPOINT}`,
    GET_CITY_BY_ID: (cityID) => `${CONFIG.BASE_URL}${CONFIG.CITY_BY_ID(cityID)}`,
    GET_DESTINATIONS_BY_CITY_ID: (cityID) => `${CONFIG.BASE_URL}${CONFIG.DESTINATIONS_BY_CITY_ID(cityID)}`,
    GET_DESTINATION_BY_ID: (cityID, destinationID) => `${CONFIG.BASE_URL}${CONFIG.DESTINATION_BY_ID(cityID, destinationID)}`
};

export default API_ENDPOINT;
