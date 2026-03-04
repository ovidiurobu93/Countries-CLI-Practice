const { getCountriesByRegion } = require("../api/countriesApi");

async function getByRegion(region) {

  const countries = await getCountriesByRegion(region);

  countries.forEach(country => {
    console.log(country.name.common);
  });
}

module.exports = getByRegion;