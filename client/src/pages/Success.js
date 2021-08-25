import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";


function Success() {

    useEffect(() => {
            setTimeout(() => {
                window.location.assign("/");
            }, 4000);
        });

    return (
        <div>
            <Jumbotron>
                <h1>Success!</h1>
                <h2>Thank you for your donation! Because of people like you, the BikeSleuths can continue to help bike owners nationwide recover their missing bikes.</h2>
                <h2>You will now be redirected to the home page.</h2>
            </Jumbotron>
        </div>
    );
}

export default Success;
