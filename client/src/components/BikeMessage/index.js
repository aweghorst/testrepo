import React from "react";
import "../../assets/styles/bikemessage.css";

const BikeMessage = ({ bikeMessages }) => {
  let nomessages = false;
  if (bikeMessages?.length === 0) {
    nomessages = true;
  }

  return (
    <div className="flex-col w-8/12 p-20 pt-0 mt-1">
      <div className="justify-center ">
        <h1 className="flex m-full mt-1 w-full justify-center comments-header">
          Comments
        </h1>
        <div className="bg-gray-200  content-between mx-auto p-6 m-2 mb-10 rounded-3xl itemcontainer comment shadow-md w-8/12">
          <div className="flex-col justify-center mx-auto justify-items-center text-center">
            {bikeMessages &&
              bikeMessages.map(message => (
                <div className="bg-gray-200 p-6 m-2 rounded-3xl pt-0 my-7 itemboxcomment shadow-md m-auto w-auto">
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
            {nomessages && <div className="bg-gray-200 p-6 pt-6 m-2 rounded-3xl pt-0  itemboxcomment my-3 shadow-md m-auto w-auto"><div className="bg-gray-50 p-6 m-2 rounded-3xl mx-auto shadow-md w-full">There Are No Messages Yet! Don't Give Up Hope!</div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeMessage;
