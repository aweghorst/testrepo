import React from "react";
import "../../assets/styles/bikemessage.css";

const BikeMessage = ({ bikeMessages }) => {


  return (
    <div>
      <h1 className="flex container mx-auto mt-10 justify-center">Comments:</h1>
      <div className=" flex justify-center text-center">
        {bikeMessages &&
          bikeMessages.map(message => (
            <div className="bg-gray-200 p-6 m-2 mb-10 rounded-3xl shadow-md w-1/3">
              <div className="flex justify-between mb-5">
                <div className="message-username">{message.username}</div>
                <div>{message.createdAt}</div>
              </div>
              <div
                className="bg-gray-50 p-6 m-2 mb-5 rounded-3xl shadow-md max-w-lg"
                key={message._id}
              >
                <div>{message.messageBody}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BikeMessage;
