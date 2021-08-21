import React from "react";
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import bike from "../../assets/images/bike.jpg";
//import { Redirect, useParams } from "react-router-dom";

const UserBike = () => {
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

  var bikeImages = [];
  var status = [];
  var description = [];

  function statusFunc() {
    console.log("here");
    const bikestatus = userArray.map((users) =>
      users.user.bikes.map((bike) => bike.status.isLost)
    );
    for (var i = 0; i < bikestatus[0].length; i++) {
      status.push(bikestatus[0][i]);
      console.log(bikestatus[0][i]);
    }
    console.log(status[0]);
    var stat1 = "" + status[0];
    return stat1;
  }

  const bikeinfo = userArray.map((users) =>
    users.user.bikes.map((description) => description.description)
  );
  console.log(bikeinfo[0][1]);

  // const bikestatus = userArray.map((users) =>
  //   users.user.bikes.map((bike) => bike.status.isLost)
  // );

  console.log(bikeinfo);
  // for (var i = 0; i < bikestatus[0].length; i++) {
  //   status.push(bikestatus[0][i]);
  //   console.log(bikestatus[0][i]);
  // }
  console.log(status[0]);
  // for (var j = 0; j < bikeinfo[0].length; i++) {
  //   description.push(bikeinfo[0][j]);
  //   console.log(bikeinfo[0][j]);
  // }
  var test = "hi";
  return <p>{statusFunc()} </p>;
  //console.log(statusFunc());
};

// };

export default UserBike;
