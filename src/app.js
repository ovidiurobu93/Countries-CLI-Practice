const getByName = require("./commands/getByName");
const getByRegion = require("./commands/getByRegion");

const command = process.argv[2];
const value = process.argv[3];

async function main() {

  if (command === "name") {
    await getByName(value);
  }

  else if (command === "region") {
    await getByRegion(value);
  }

  else {
    console.log("Usage:");
    console.log("node src/app.js name Romania");
    console.log("node src/app.js region Europe");
  }

}

main();