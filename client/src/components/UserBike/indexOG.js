import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bike from "../../assets/images/bike.jpg";
import { Redirect, useParams } from "react-router-dom";

//import { QUERY_USER } from "../utils/queries";

const UserBike = () => {
  /*const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
*/
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
            description: "This is a test description for bike 1",
            image:
              "https://cdn.shopify.com/s/files/1/2081/1519/products/1600x1067_Sparrow_White_Blue_ANGLE.jpg?v=1590502984",
            status: {
              isLost: true,
              location: "Dallas",
              date: "2021 / 02 / 25",
            },
          },
        ],
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(userArray.user);
  const testArr = [
    { greeding: "hi", num: 1, user: [{ brand: "walmart", weather: "sunny" }] },
    {
      greeding: "hello",
      num: 2,
      user: [{ brand: "target", weather: "clouds" }],
    },
  ];

  console.log(testArr[1].user[0].length);
  // for (var i = 0; i < testArr.length; i++) {
  //   console.log(testArr[1].user[1].brand);
  //   for (var j = 0; j < testArr.user.bikes.length; j++) {}
  // }

  /*
  testArr.map((x) => {
    console.log(x.user[0].brand);
    return x + index;
  });
*/
  return (
    // <div>
    //   {testArr.map((test, index) => (
    //     // console.log(index);
    //     <h1 key={index}> {test.user[index].brand}</h1>
    //   ))}

    {
      /* {userArray.map(
        (user) => (
          <h1 key={i}> {user.username}</h1>
        )
        // user.bikes.map((bike) => <h1>{bikes.brand} </h1>)
      )} */
    }
    // </div>
    // <>
    //   <span className="">
    //     {/* <Carousel
    //       responsive={responsive}
    //       infinite={false}
    //       swipeable={true}
    //       removeArrowOnDeviceType={["tablet", "mobile"]}
    //       className="flex justify-center p-20"
    //       centerMode={true}
    //     > */}
    //     {/* {user ? (
    //         <> */}
    //     {user.user.bikes.map((bike) => (
    //       <div
    //         key={bike._id}
    //         className="bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg"
    //       >
    //         <div className="">
    //           <img
    //             className="object-contain h-48 w-full p-1"
    //             src={bike.image}
    //             alt="your bike"
    //           ></img>
    //           <div className="bg-gray-200 rounded-3xl p-2">
    //             <div className="pt-2 pb-2 bg-red-200 rounded-full">
    //               {bike.status.isLost}
    //             </div>
    //             <div>
    //               <p className="pt-3 pb-3">{bike.description}</p>
    //             </div>
    //             <div className="flex justify-around">
    //               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //                 Edit
    //               </button>
    //               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //                 Comments
    //               </button>
    //               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //     {/* </> */}
    //     {/* ) : null} */}
    //     {/* </Carousel> */}
    //   </span>
    // </>
  );
};

export default UserBike;
