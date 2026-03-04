const { getCountryByName } = require("../api/countriesApi");

async function getByName(name) {

  const countries = await getCountryByName(name);
  const country = countries[0];

  console.log("Country:", country.name.common);
  console.log("Capital:", country.capital[0]);
  console.log("Region:", country.region);
  console.log("Population:", country.population);
}

module.exports = getByName;