import React, { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";
import { useQuery } from '@apollo/client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Message from '../../pages/Message.js';
import { QUERY_LOST_BIKES } from '../../utils/queries.js';

const SearchBike = () => {
    const [searchInput, setSearchInput] = useState('');

    const {loading, data, error} = useQuery(QUERY_LOST_BIKES, {
        variables: {searchInput},
    })
    // console.log("This is your log of the useQuery of QUERY_ALL_BIKES: ", data);

    // use a ternary operator to check if bike data is present (loaded)
    const lostBikes = loading ? [] : data.lostBikes;
  
    // console.log("These are your lost bikes: ", lostBikes);


    const [searchedBikes, setSearchedBikes] = useState([]);

    const [clickSearch, setClickSearch] = useState(false);

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
        // console.log("clicked")
        setClickSearch(true);

        function findLostBikes (arr, query) {
            console.log("this is your array: ", arr);
            console.log("You searched for: ", query);
            return arr.filter((bikes, index) => {
                index =+ 0
                if (bikes.status[index].location === query) {
                    console.log(bikes);
                    return bikes;
                }
            });
        }

        try {

            const response = await findLostBikes(lostBikes, searchInput)
            console.log("This is your response: ", response);

            if (!response) {
                throw new Error("Something went wrong!");
            }

            // const bikeData = response.map((bike) => ({
            //     bikeId: bike._id,
            //     brand: bike.brand,
            //     description: bike.description,
            //     image: bike.image,
            //     serial: bike.serial,
            //     status: bike.status,
            // }));

            setSearchedBikes(response);
            setSearchInput('');

        } catch (err) {
            console.log(err)
        }

    }


    return (
        <>
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

            {console.log('searchedbikes', searchedBikes.length ? true : false)}

            <Carousel responsive={responsive} infinite={false} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} className="flex justify-center p-20" centerMode={true}>
                    {searchedBikes.length ? (
                            <div>
                                {searchedBikes.map((bike) => {
                                        // {console.log('carousel', bike[i]._id)}
                                    // if (bike) {
                                        return(
                                            <div key={bike._id}>
                                                {bike.image ? (
                                                    <img className="object-contain h-48 w-full p-1" src={bike.image} alt="the users bike" />
                                                ) : null}
                                                <div className="bg-gray-200 rounded-3xl p-2">
                                                    {bike.status[0].isLost ? (
                                                        <h4 className="pt-2 pb-2 bg-red-200 text-center rounded-full">Missing</h4>
                                                    ) : (
                                                        <h4 className="pt-2 pb-2 bg-green-200 text-center rounded-full">Found</h4>
                                                    )}
                                                    <div>                                                        
                                                        <p className="pt-3 pb-3">Brand: {bike.brand}</p>
                                                        <p className="pt-3 pb-3">Model: {bike.bike_model}</p>
                                                        <p className="pt-3 pb-3">Serial: {bike.serial}</p>
                                                        <p className="pt-3 pb-3">Description: {bike.description}</p>
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
                                // }
                            })}
                            </div>
                    ) : (
                        clickSearch ? (<div>There are no missing bikes reported in this area</div>) : (<div></div>)
                        )
                }
            </Carousel> 

        </span>
        </>
            
    )
}

export default SearchBike;