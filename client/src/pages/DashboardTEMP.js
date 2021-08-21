const userArray = [
  {
    user: {
      username: "testuser1",
      bikeCount: 2,
      bikes: [
        {
          _id: 1,
          brand: "testbrand1",
          bike_model: "testmodel1",
          year: 1998,
          serial: 1111111,
          description: "This is a test description for bike 1",
          image:
            "https://cdn.shopify.com/s/files/1/2081/1519/products/1600x1067_Sparrow_White_Blue_ANGLE.jpg?v=1590502984",
          status: {
            isLost: true,
            location: "Austin",
            date: "2020 / 03 / 23",
          },
        },
        {
          _id: 2,
          brand: "testbrand2",
          bike_model: "testmodel2",
          year: 2021,
          serial: 2222222222,
          description: "This is a test description for bike 2",
          image:
            "https://cdn.shopify.com/s/files/1/2081/1519/products/1600x1067_Sparrow_White_Blue_ANGLE.jpg?v=1590502984",
          status: {
            isLost: false,
            location: "Dallas",
            date: "2021 / 02 / 25",
          },
        },
      ],
    },
  },
];



const bikeinfo = userArray.map(users => users.user.bikes)
const bikestatus = userArray.map(users => users.user.bikes.map(bike => bike.status.isLost))



console.log(bikeinfo)
console.log(bikestatus);
