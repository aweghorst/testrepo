import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutations";
import { Redirect } from "react-router-dom";


const MessageForm = () => {
  const [messageBody, setMessageBody] = useState("");
  const [addMessage, { error }] = useMutation(ADD_MESSAGE);
  const [bikeId, setBikeId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let currentIdUrl = window.location.hash.split("/").splice(2).toString();

  function handleChange(event) {
    setMessageBody(event.target.value);
    setBikeId(currentIdUrl);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      await addMessage({
        variables: { bikeId, messageBody },
      });

      setMessageBody("");
      setBikeId("");
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  }

  if (submitted === true) {
    alert("Your message has been sent!");
    return <Redirect to="/Search" />;
  }

  return (
    <div className="flex justify-center">
      <div className="inline-block addbikecontainer align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className=" addheadercontainer px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <span role="img" aria-label="bike Emoji">
                ✉️
              </span>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg addheadertext leading-6 font-medium text-gray-900">
                Leave a Message
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Found this bike? Let the owner know! Leave a description of
                  the location and the rider if there was one. Don't worry only
                  the owner can see this message!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleFormSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 addbackground sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message the Owner!
                  </label>
                  <textarea
                    className="border pl-3 pt-1 mt-2 rounded-md outline"
                    rows="5"
                    cols="59"
                    placeholder="Type your message here!"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
