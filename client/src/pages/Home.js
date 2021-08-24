import React from 'react';
import '../assets/styles/home.css';

const Home = () => {

    return (
        <div className="home-container">
            <div>
                <h2 className="welcome-title"><span>Welcome to BikeSleuth!</span></h2>
            </div>
            <div className="pt-4">
                <p className="welcome-text">BikeSleuth is designed to quickly reunite a rider and their missing bicycle. With this app, you are able to upload your bicycle information at any time and in the event the bike becomes lost or stolen, you can update your bike's status as missing and your bike will be automatically added to our search page allowing other users in your area to keep an eye out for your missing bicycle. </p>
            </div>
        </div>
    )
}

export default Home;