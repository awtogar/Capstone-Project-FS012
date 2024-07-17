// src/globals/config.js
const CONFIG = {
    BASE_URL: 'https://be-caps.vercel.app',
    CITY_ENDPOINT: '/city',
    CITY_BY_ID: (cityID) => `/city/${cityID}`,
    DESTINATIONS_BY_CITY_ID: (cityID) => `/city/${cityID}/destination`,
    DESTINATION_BY_ID: (cityID, destinationID) => `/city/${cityID}/destination/${destinationID}`
};

export default CONFIG;
