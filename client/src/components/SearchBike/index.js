import React, { useState, useEffect } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Message from '../../pages/Message.js';
import { QUERY_ALL_BIKES } from '../../utils/queries.js';

const SearchBike = () => {


    const { loading, data} = useQuery(QUERY_ALL_BIKES);
    console.log(data);

    const allBikes = data?.bikes;
    console.log("bikes", allBikes);
    // returns with status as undefined
    // const lostBikes = allBikes?.filter(bike => bike.status[0].isLost === true);
    // console.log("lost",lostBikes);

    // works for single bike but not an array of bikes
    const bike = data?.bikes[0];
    console.log("bike", bike);
    console.log("bike status", bike?.status[0].isLost);

    const status = allBikes?.map(bike => bike.status[0]);
    console.log("status", status);

    const [searchedBikes, setSearchedBikes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
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
    
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        console.log(event);
    }


    return (
        <span className="justify-center">

            <form className="bg-white shadow p-4 flex" onSubmit={handleSearchSubmit}>
                    <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                        <p className="material-icons text-3xl">search</p>
                    </span>
                    <input 
                    className="w-full rounded p-2" 
                    type="text" 
                    placeholder="Try 'Los Angeles'"  
                    name="searchInput" 
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    />
                    <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" >
                            <p className="font-semibold text-xs">Search</p>
                    </button>
                </form>

            <Carousel responsive={responsive} infinite={false} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} className="flex justify-center p-20" centerMode={true}>

                            <div>
                                {searchedBikes.map((bike) => {
                                    return(
                                        <div key={bike._id}>
                                            {bike.image ? (
                                                <img className="object-contain h-48 w-full p-1" src={bike.image} alt="the users bike" />
                                            ) : null}
                                            <div className="bg-gray-200 rounded-3xl p-2">
                                                <h4 className="pt-2 pb-2 bg-red-200 rounded-full">{bike.status}</h4>
                                                <div>
                                                    <p lassName="pt-3 pb-3">{bike.description}</p>
                                                </div>
                                                <HashRouter>
                                                    <div className="flex justify-around">
                                                        <NavLink exact to="/Message" activeClassName="current-nav" className="nav-link" replace>
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Message User</button>
                                                        </NavLink>

                                                        <Switch>
                                                            <Route exact path="/Message" component={Message} />
                                                        </Switch>
                                                    </div>
                                                </HashRouter>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* <div>
                                    <div className="bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg">
                                        <div className="">
                                                <img className="object-contain h-48 w-full p-1" src={bike} alt="the users bike"></img>
                                            <div className="bg-gray-200 rounded-3xl p-2">
                                                <div className="pt-2 pb-2 bg-red-200 rounded-full">Missing</div>
                                                <div>
                                                    <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                                <HashRouter>
                                                    <div className="flex justify-around">
                                                        <NavLink exact to="/Message" activeClassName="current-nav" className="nav-link" replace>
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Message User</button>
                                                        </NavLink>

                                                        <Switch>
                                                            <Route exact path="/Message" component={Message} />
                                                        </Switch>
                                                    </div>
                                                </HashRouter>
                                            </div>
                                        </div>
                                    </div>
                            </div> */}
            </Carousel>

        </span>
            
    )
}

export default SearchBike;
