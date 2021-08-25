import React, { useState, useEffect } from "react";
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from "../../utils/queries"
import "../../assets/styles/footer.css";



const Footer = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  function submitCheckout() {
    const productIds = [];

    getCheckout({
      variables: { products: productIds }
    });
  }



    return (
        <div className=" footer-section">
            <footer className="footer-text dark:text-gray-400">
                <div>&copy; 2021 by UTA Coding Bootcamp Group 1</div>
                <div>
                    <div className="product">
                        <div className="description">
                            <h3>Please consider a small Donation to the BikeSleuth team hard at work recovering lost bicycles everywhere.</h3>
                        </div>
                    </div>
                    <form action="/create-checkout-session" method="POST">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={submitCheckout}>Donate</button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
