const faker = require("faker");

const db = require("../config/connection");
const { User, Bike } = require("../models");

db.once("open", async () => {
  await Bike.deleteMany({});
  await User.deleteMany({});

  // create users
  const userData = [];

  for (let i = 0; i < 20; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create bikes
  let createdBikes = [];
  for (let i = 0; i < 50; i += 1) {
    const brand = faker.vehicle.model();
    const bike_model = faker.animal.cat();
    const year = faker.date.recent();
    const serial = faker.vehicle.vin();
    const description = faker.vehicle.color();
    const image = faker.image.imageUrl();

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    const createdBike = await Bike.create({ brand, bike_model, year, serial, description, image });
    const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { bikes: createdBike._id } }
    );

    createdBikes.push(createdBike);
  }

  // assign bike status
  for (let i = 0; i < 30; i++) {
    const lostStatus = faker.datatype.boolean();
    const location = faker.address.city();

    const randomBikeIndex = Math.floor(Math.random() * createdBikes.length);
    const { _id: bikeId } = createdBikes[randomBikeIndex];

    const updatedBike = await Bike.findByIdAndUpdate(
        { _id: bikeId },
        { status: { isLost: lostStatus, location: location } }
    );
  }

  // create comments
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomBikeIndex = Math.floor(Math.random() * createdBikes.length);
    const { _id: bikeId } = createdBikes[randomBikeIndex];

    await Bike.updateOne(
      { _id: bikeId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    );
  }

  console.log("Seeds planted!");
  process.exit(0);
});