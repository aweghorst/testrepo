import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import bike from '../../assets/images/bike.jpg';
import BikeMessage from '../BikeMessage';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_USERS } from '../../utils/queries';

const UserBike = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const user = data?.users[6] || {};
    console.log(data);
    console.log(user);

    const { username, email, bikeCount, bikes } = user;

    const [bikeMessages, setBikeMessages] = useState();
    const [showMessages, clickedShowMessages] = useState(false);

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

        // get bike id
        const bikeId = e.target.getAttribute('data-bike-id');
        console.log("clicked message!", bikeId);

        // get bike messages
        const bikeMessages = bikes?.filter(bike => bike._id === bikeId)[0].messages;
        console.log("one bike", bikeMessages);

        setBikeMessages(bikeMessages);
        console.log("mesages", bikeMessages);
    }

    function handleEditClick(e) {
        e.preventDefault();
        console.log('clicked edit!')


        // get bike id
        const bikeId = e.target.getAttribute('data-bike-id');
    }

    function handleDeleteClick(e) {
        e.preventDefault();
        console.log('clicked delete!');

        // get bike id
        const bikeId = e.target.getAttribute('data-bike-id');
    }

    return (
        <span className="">
            {/* <Carousel responsive={responsive} infinite={false} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} className="flex justify-center p-20" centerMode={true}> */}
            {bikes?.map(bike => ( 
                            <div className="bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg">
                                <div className="">
                                        <img className="object-contain h-48 w-full p-1" src={bike} alt="your bike"></img>
                                    <div className="bg-gray-200 rounded-3xl p-2">
                                        <div className="pt-2 pb-2 bg-red-200 rounded-full">Missing</div>
                                        <div>
                                            hello here are my bikes
                                            <ul>
                                                <li>image: {bike.image}</li>
                                                <li>Description: {bike.description}</li>
                                                <li>Brand: {bike.brand}</li>
                                                <li>Status: {bike.status[0].isLost}</li>
                                                <li>Location: {bike.status[0].location}</li>
                                                <li>Messages: {bike.messages.map(message => message.messageBody)}</li>    
                                            </ul>
                                                <p>Messages: {bike.messages.map(message => (
                                                    `${message.messageBody} posted by ${message.username} on ${message.createdAt}`))}</p>   
                                            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="flex justify-around">
                                        <button data-bike-id={bike._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleEditClick}>Edit</button>
                                        <button data-bike-id={bike._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleMessagesClick}>Messages</button>
                                        <button data-bike-id={bike._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDeleteClick}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
            {/* </Carousel> */}

            <div>
            <BikeMessage bikeMessages={bikeMessages}/>
            </div>
        </span>
            
    )
}

export default UserBike;
