const axios = require("axios");

const BASE_URL = "https://restcountries.com/v3.1";

async function getCountryByName(name) {
  const response = await axios.get(`${BASE_URL}/name/${name}`);
  return response.data;
}

async function getCountriesByRegion(region) {
  const response = await axios.get(`${BASE_URL}/region/${region}`);
  return response.data;
}

module.exports = {
  getCountryByName,
  getCountriesByRegion
};