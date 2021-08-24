import React from "react";
import "../../assets/styles/bikemessage.css";

const BikeMessage = ({ bikeMessages }) => {
  let nomessages = false;
  if (bikeMessages?.length === 0) {
    nomessages = true;
  }

  return (
    <div className="flex justify-center w-8/12 p-20 pb-0 pt-0 mt-1">
      <div className="justify-center inline-block addbikecontainer align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full">
        <div className=" addheadercontainer px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <span role="img" aria-label="bike Emoji">
                ✉️
              </span>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg addheadertext leading-6 font-medium text-gray-900">
                Messages
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  If other users see your bike, they will leave messages for you here!  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 content-between  p-6 itemcontainercomment shadow-md">
          <div className="flex-col justify-center mx-auto justify-items-center text-center">
            {bikeMessages &&
              bikeMessages.map(message => (
                <div className="bg-gray-200 p-6 m-2 rounded-3xl pt-0 my-7 break-words itemboxcomment shadow-md m-auto w-auto">
                  <div className="flex justify-between mb-5">
                    <div className="message-username">{message.username}</div>
                    <div>{message.createdAt}</div>
                  </div>
                  <div
                    className="bg-gray-50 p-6 m-2 rounded-3xl mx-auto shadow-md w-full"
                    key={message._id}
                  >
                    <div>{message.messageBody}</div>
                  </div>
                </div>
              ))}
            {nomessages && (
              <div className="bg-gray-200 p-6 pt-6 m-2 rounded-3xl pt-0  itemboxcomment my-3 shadow-md m-auto w-auto">
                <div className="bg-gray-50 p-6 m-2 rounded-3xl mx-auto shadow-md w-full">
                  There Are No Messages Yet! Don't Give Up Hope!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeMessage;
