const { getCountryByName } = require("../src/api/countriesApi");

test("should return Romania data", async () => {
  const data = await getCountryByName("Romania");

  expect(data).toBeDefined();
  expect(data[0].name.common).toBe("Romania");
});



const { getCountriesByRegion } = require("../src/api/countriesApi")

test("should return all countries in Europe", async () => {
  const data = await getCountriesByRegion("Europe");
  expect(data.length).toBeGreaterThan(0);
  expect(data[0]).toHaveProperty("name");
  expect(data[0]).toHaveProperty("population");
});

const { getCountriesStatusCode } = require("../src/api/countriesApi");

test("should return status 200 when Europe regions", async () => {

  const response = await getCountriesStatusCode("Europe");

  expect(response.status).toBe(200);

});

const { getCountriesStatusCode1 } = require("../src/api/countriesApi");

test("should return 200 for Country Names API", async () => {
  const response = await getCountriesStatusCode1("Romania");
  expect(response.status).toBe(200);
});