import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bike from "../../assets/images/bike.jpg";
import BikeMessage from "../BikeMessage";
import EditBike from "../EditBike";
import { useQuery, useMutation } from "@apollo/client";
//import { useMutation } from "@apollo/react-hooks";
import { DELETE_BIKE } from "../../utils/mutations";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";
//import { index } from "../../../../server/models/Status";

const UserBike = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const user = data?.users[10] || {};

  const { username, email, bikeCount, bikes } = user;
  console.log(bikes);

  const [showMessages, clickedShowMessages] = useState(false);
  const [bikeState, setBikeState] = useState(bikes);
  useEffect(() => {
    setBikeState(bikes);
  }, bikes);
  const [deletePost, { error }] = useMutation(DELETE_BIKE);
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

  function handleMessagesClick(e) {
    e.preventDefault();
    console.log("clicked message!");
  }

  function handleEditClick(e) {
    e.preventDefault();
    console.log("clicked edit!");
    // return (<div>Hello</div>);
    // window.location.assign("/EditBike");
  }

  const handleDeleteClick = async (bikeId) => {
    //  e.preventDefault();
    console.log("clicked delete!");
    console.log("This is the bikeID: " + bikeId);
    try {
      await deletePost({
        variables: { bikeId },
      });
    } catch (error) {
      console.log(error);
    }
    // var bikeArr = [];
    // bikeState.forEach((element, index) => {
    //   if (element._id === bikeId) {
    //   } else {
    //     bikeArr.push(element);
    //   }
    // });
    // console.log(bikeArr);
    // setBikeState(bikeArr);
    window.location.reload();
  };

  console.log(data);
  //console.log(bikes.brand);

  return (
    <span className="">
      {/* <Carousel
        responsive={responsive}
        infinite={false}
        swipeable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="flex justify-center p-20"
        centerMode={true}
      > */}
      {bikeState?.map((bike) => (
        <div className="bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg">
          <div className="">
            <img
              className="object-contain h-48 w-full p-1"
              src={bike.image}
              alt="your bike"
            ></img>
            <div className="bg-gray-200 rounded-3xl p-2">
              {bike.status[0].isLost ? (
                <div className="pt-2 pb-2 bg-red-200 rounded-full">Missing</div>
              ) : (
                <div className="pt-2 pb-2 bg-green-200 rounded-full">Found</div>
              )}

              <div>
                hello here are my bikes
                <ul>
                  <li>Brand: {bike.brand}</li>
                  <li>Model: {bike.bike_model}</li>

                  <li>Location: {bike.status[0].location}</li>
                </ul>
                <p>Description: {bike.description}</p>
              </div>
              <div className="flex justify-around">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleMessagesClick}
                >
                  Messages
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleDeleteClick(bike._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div></div>
      {/* </Carousel> */}

      <div>
        <BikeMessage />
      </div>
    </span>
  );
};

export default UserBike;
