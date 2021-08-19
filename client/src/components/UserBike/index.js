import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bike from "../../assets/images/bike.jpg";

const UserBike = () => {
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

  return (
    <span className="">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="flex justify-center p-20"
      >
        <div className="bg-gray-300 p-6 rounded-3xl shadow-2xl max-w-sm">
          <div className="">
            <img className="object-contain h-48 w-full p-1" src={bike}></img>
            <div className="bg-gray-200 rounded-3xl p-2">
              <div className="pt-2 pb-2 bg-red-200 rounded-full">Missing</div>
              <div>
                <p className="pt-3 pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex justify-around">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Edit
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Comment
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-6 rounded-3xl shadow-2xl max-w-sm">
          <div className="">
            <img className="object-contain h-48 w-full p-1" src={bike}></img>
            <div className="bg-gray-200 rounded-3xl p-2">
              <div className="pt-2 pb-2 bg-red-200 rounded-full">Missing</div>
              <div>
                <p className="pt-3 pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex justify-around">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Edit
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Comment
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </span>
  );
};

export default UserBike;
