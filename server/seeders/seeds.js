const faker = require("faker");

const db = require("../config/connection");
const { Bike } = require("../models");

db.once("open", async () => {
  await Bike.deleteMany({});

  // create user data
  const bikeData = [];

  for (let i = 0; i < 50; i += 1) {
    //const username = faker.internet.userName();
    const brand = faker.vehicle.model();
    const model = faker.animal.cat();
    const year = faker.date.recent();
    const serial = faker.vehicle.vin();
    const description = faker.vehicle.color();
    const status = faker.datatype.boolean();
    bikeData.push({ brand, model, year, serial, description, status });
  }

  const createdBikes = await Bike.collection.insertMany(bikeData);

  console.log(createdBikes);
  process.exit(0);
});
