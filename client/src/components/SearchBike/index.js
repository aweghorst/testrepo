import React, { useState } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Message from "../../pages/Message.js";
import { QUERY_ALL_BIKES } from "../../utils/queries.js";

const SearchBike = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // const user = data?.users[6] || {};
  // console.log(data);
  // console.log(user);
  // const { username, email, bikeCount, bikes } = user;

  //use when logged into app. if using seeded data, uncomment lines 9-13
  const { loading, data } = useQuery(QUERY_ALL_BIKES);
  console.log(data);

  //filters array based on bike status is Lost true
  var filteredArray = data?.bikes
    .filter(bike => bike.status.some(status => status.isLost == true))
    .map(bike => {
      let n = Object.assign({}, bike, {
        isLost: bike.status.filter(status => status.isLost == true),
      });
      return n;
    });
  console.log("filteredarray", filteredArray);

  return (
    <>
      <span>
        <div
          id="dashboardcontainer"
          className=" flex flex-wrap justify-center visible"
        >
          {filteredArray?.map(bike => (
            <div
              className="bg-gray-300 p-6 itembox m-2 rounded-3xl shadow-2xl max-w-lg"
              key={bike._id}
            >
              <div className="">
                <img
                  className="object-contain h-48 w-full p-1"
                  src={bike.image}
                  alt="your bike"
                ></img>
                <div className="bg-gray-200 rounded-3xl p-2">
                  <div className="pt-2 pb-2 bg-red-200 text-center rounded-full">
                    Missing
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span className="detailsheader">Brand:</span>{" "}
                        {bike.brand}
                      </li>
                      <li>
                        <span className="detailsheader">Model:</span>{" "}
                        {bike.bike_model}
                      </li>
                      <li>
                        <span className="detailsheader">Location:</span>{" "}
                        {bike.status.location}
                      </li>
                      <li className="detailsheader descriptionheader">
                        Description
                      </li>
                    </ul>
                    <p className="description">{bike.description}</p>
                  </div>
                  <div className="flex justify-around">
                    <button
                      data-bike-id={bike._id}
                      className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                      //   onClick={handleMessagesClick}
                    >
                      Message User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </span>
    </>
  );
};

export default SearchBike;
