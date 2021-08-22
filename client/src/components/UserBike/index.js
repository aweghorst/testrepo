import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import BikeMessage from '../BikeMessage';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_USERS } from '../../utils/queries';


const UserBike = () => {
    // const { loading, data } = useQuery(QUERY_USERS);
    // const user = data?.users[6] || {};
    // console.log(data);
    // console.log(user);
    // const { username, email, bikeCount, bikes } = user;

    //use when logged into app. if using seeded data, uncomment lines 9-13
    const { loading, data} = useQuery(QUERY_USER);
    console.log(data?.user);
    
    const username = data?.user.username;
    const email = data?.user.email;
    const bikeCount = data?.user.bikeCount;
    const bikes = data?.user.bikes;

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
            
            <Carousel responsive={responsive} infinite={false} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} className="flex justify-center p-20" centerMode={true}>

            {bikes?.map(bike => ( 
                            <div className="bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg" key={bike._id}>
                                <div className="">
                                        <img className="object-contain h-48 w-full p-1" src={bike.image} alt="your bike"></img>
                                    <div className="bg-gray-200 rounded-3xl p-2">
                                    {bike.status[0].isLost ? <div className="pt-2 pb-2 bg-red-200 rounded-full" >Missing</div> : <div className="pt-2 pb-2 bg-green-200 rounded-full">Found</div>}
                                        <div>
                                            <ul>
                                                <li>Brand: {bike.brand}</li>
                                                <li>Model: {bike.bike_model}</li>
                                                <li>Location: {bike.status[0].location}</li>   
                                            </ul>
                                            <p className="pt-3 pb-3">Description: {bike.description}</p>
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
                    <div></div>
            </Carousel>
            <div>
            <BikeMessage bikeMessages={bikeMessages}/>
            </div>
        </span>

    )
}

export default UserBike;