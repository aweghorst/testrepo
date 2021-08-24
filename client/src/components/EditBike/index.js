import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import { UPDATE_BIKE, UPDATE_STATUS } from "../../utils/mutations";
import FileBase64 from "react-file-base64";

const EditBike = ({
  bikeId,
  status,
  brand,
  bikeModel,
  year,
  serialNum,
  city,
  description,
  image,
}) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  // create a new bike
  const [formState, setFormState] = useState({
    brand: "",
    bike_model: "",
    year: "",
    serial: "",
    description: "",
    image: "",
  });
  console.log(bikeId);
  console.log(status);
  console.log(brand);
  console.log(bikeModel);
  console.log(year);
  console.log(serialNum);
  console.log(city);
  console.log(description);
  console.log(image);

  // set status of new bike
  const [statusState, setStatusState] = useState({
    location: "",
    isLost: "",
  });

  const [updateBike] = useMutation(UPDATE_BIKE);
  const [updateStatus] = useMutation(UPDATE_STATUS);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleChangeStatus = (event) => {
    let isLost;
    const status = document.querySelector('[name="status"]').value;
    if (status === "Not missing") {
      isLost = false;
    } else {
      isLost = true;
    }
    const location = document.querySelector("#location").value;
    setStatusState({
      isLost,
      location,
    });
  };
  // submit form,  pass the data from the form state object as variables for our addUser mutation function
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(statusState);
    // use try/catch instead of promises to handle errors
    try {
      // execute addBike mutation and pass in variable data from form
      const { data } = await updateBike({
        variables: { ...formState },
      });

      const bikeId = data?.updateBike._id;
      setBikeStatus(bikeId, statusState.isLost, statusState.location);

      setFormState({
        brand: "",
        bike_model: "",
        year: "",
        serial: "",
        description: "",
        image: "",
      });
      setStatusState({
        location: "",
        isLost: "",
      });

      console.log("form from addBike:", data);
      window.location.reload();
    } catch (e) {
      console.error(e);
      window.location.reload();
      window.alert(
        "There was an error with adding your bike. Please make sure bike image is not larger than 64 KB."
      );
    }
  };

  async function setBikeStatus(bikeId, isLost, location) {
    try {
      const statusData = await updateStatus({
        variables: { bikeId, isLost, location },
      });
      console.log("status Data", statusData);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setOpen((open) => !open)}
      >
        Edit
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <span role="img" aria-label="bike Emoji">
                        🚴
                      </span>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Edit Your Bike Details
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Please add or edit details to your bike, if need be!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="PUT" onSubmit={handleFormSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Bike's current status
                          </label>
                          <select
                            value={status}
                            id="status"
                            name="status"
                            onChange={handleChangeStatus}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>Not missing</option>
                            <option>Missing</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="brand"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Brand
                            </label>
                            <input
                              // value={brand}
                              type="text"
                              name="brand"
                              id="brand"
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="model"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Model
                            </label>
                            <input
                              value={bikeModel}
                              type="text"
                              name="bike_model"
                              id="bike_model"
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="year"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Year
                            </label>
                            <input
                              type="text"
                              name="year"
                              id="year"
                              value={year}
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="serial"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Serial Number
                            </label>
                            <input
                              type="text"
                              name="serial"
                              id="serial"
                              value={serialNum}
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              name="location"
                              id="location"
                              value={city}
                              onChange={handleChangeStatus}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Description
                            </label>
                            <input
                              type="text"
                              name="description"
                              id="description"
                              value={description}
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <br></br>
                        </div>
                        <p>Image size cannot be larger than 64 KB.</p>
                        <div>
                          <FileBase64
                            multiple={false}
                            onDone={({ base64 }) =>
                              setFormState({
                                ...formState,
                                image: base64,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default EditBike;
