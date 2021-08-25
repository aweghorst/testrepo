import React from 'react';
import '../assets/styles/home.css';

const Home = () => {

    return (
        <div className="home-container">
            <div>
                <h2 className="welcome-title"><span className="dark:text-gray-200">Welcome to BikeSleuth!</span></h2>
            </div>
            <div className="pt-4">
                <p className="welcome-text dark:text-gray-200">BikeSleuth is designed to quickly reunite a rider and their missing bicycle. With this app, you are able to upload your bicycle information at any time and in the event the bike becomes lost or stolen, you can update your bike's status as missing and your bike will be automatically added to our search page allowing other users in your area to keep an eye out for your missing bicycle. </p>
            </div>
            <div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl space-x-3">
                    <div class="md:flex">
                        <div class="p-8">
                            <p class="block mt-1 text-lg leading-tight font-medium text-black underline">Double up your security by using two high-quality locks</p>
                            <p class="mt-2 text-gray-500">U-locks tend to be more durable than thin cable locks, which can be cut through more easily. But because of their shape, U-locks limit the amount of bike you can secure at one time, so consider pairing yours with a sturdy steel chain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;