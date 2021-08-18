import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import '../../assets/styles/dashboard.css';
import bike from '../../assets/images/bike.jpg';

const Bike = () => {

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
        <div className="">
            <Carousel responsive={responsive} infinite={true} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]}>

            <div>
                <div className="card">
                    <div>
                        <img className="card-img-top" src={bike}></img>
                    </div>
                    <div className="card-body">
                        <div className="title-div">Missing</div>
                        <div>
                            <p className="project-text card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="card-buttons">
                            <button className="edit-btn">Edit</button>
                            <button className="comments-btn">Comments</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            

            </Carousel>
            
        </div>
    )
}

export default Bike;
