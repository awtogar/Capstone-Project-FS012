// data-services.js
import axios from "axios";

const BASE_URL = "https://be-caps.vercel.app";

export const getAllCities = async () => {
  try {
    const url = `${BASE_URL}/city`;
    console.log(`Fetching from URL: ${url}`);
    const response = await axios.get(url);
    console.log(`Response:`, response); // Log Response
    if (response.data.status === "success") {
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
    const url = `${BASE_URL}/city/${cityId}`;
    console.log(`Fetching from URL: ${url}`);
    const response = await axios.get(url);
    console.log(`Response:`, response); // Log Response
    if (response.data.status === "success") {
      return response.data.data.city;
    } else {
      console.error("Error: Failed to fetch city details");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllDestinationsByCityId = async (cityId) => {
  try {
    const url = `${BASE_URL}/city/${cityId}/destination`;
    console.log(`Fetching from URL: ${url}`);
    const response = await axios.get(url);
    console.log(`Response:`, response); // Log Response
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
    const url = `${BASE_URL}/city/${cityId}/destination/${destinationId}`;
    console.log(`Fetching from URL: ${url}`);
    const response = await axios.get(url);
    console.log(`Response:`, response); // Log Response
    if (response.data.status === "success") {
      return response.data.data.destination;
    } else {
      console.error("Error: Failed to fetch destination details");
    }
  } catch (error) {
    console.error(error);
  }
};
