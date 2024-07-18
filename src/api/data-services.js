import axios from "axios";

const BASE_URL = "https://be-caps.vercel.app";

export const getAllCities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/city`);
    if (response.data.status === "success") {
      console.log('API Response:', response.data.data); // Debugging line
      return response.data.data;
    } else {
      console.error("Error: Failed to fetch cities");
      return { cities: [] };
    }
  } catch (error) {
    console.error(error);
    return { cities: [] };
  }
};

export const getCityById = async (cityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/city/${cityId}`);
    if (response.data.status === "success") {
      return response.data.data;
    } else {
      console.error("Error: Failed to fetch city details");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllDestinationsByCityId = async (cityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/city/${cityId}/destination`);
    if (response.data.status === "success") {
      return response.data.data.destinations;
    } else {
      console.error("Error: Failed to fetch destinations");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getDestinationById = async (cityId, destinationId) => {
  try {
    const response = await axios.get(`${BASE_URL}/city/${cityId}/destination/${destinationId}`);
    if (response.data.status === "success") {
      return response.data.data.destination;
    } else {
      console.error("Error: Failed to fetch destination details");
    }
  } catch (error) {
    console.error(error);
  }
};
