
import axios from 'axios';
const API_BASE_URL = 'https://be-caps.vercel.app';


export const fetchAllCities = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/city`);
        return response.data.data;
    } catch (error) {
        console.error("There was an error fetching the cities!", error);
        throw error;
    }
};


export const fetchCityById = async (cityId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/city/${cityId}`);
        return response.data.data.city;
    } catch (error) {
        console.error(`There was an error fetching the city with ID: ${cityId}!`, error);
        throw error;
    }
};


export const fetchDestinationsByCityId = async (cityId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/city/${cityId}/destination`);
        return response.data.data.destinations;
    } catch (error) {
        console.error(`There was an error fetching destinations for the city with ID: ${cityId}!`, error);
        throw error;
    }
};


export const fetchDestinationById = async (cityId, destinationId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/city/${cityId}/destination/${destinationId}`);
        return response.data.data.destination;
    } catch (error) {
        console.error(`There was an error fetching the destination with ID: ${destinationId} for the city with ID: ${cityId}!`, error);
        throw error;
    }
};
