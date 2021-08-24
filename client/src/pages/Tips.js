import React from "react";
import biketips from "../assets/images/biketips.jpg";
import "../assets/styles/tips.css";

const Tips = () => {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <p class="block mt-1 text-lg leading-tight font-medium text-black underline">Finding customers for your new business</p>
            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div>

    </div>



    // <div className="p-20">
    //   <div className="flex justify-around">
    //     <img
    //       width="50%"
    //       className="imgborder"
    //       src={biketips}
    //       alt="simple graphic of a locked up bike"
    //     />
    //     <div className="ml-10">
    //       <div className="p-1 text-center">
    //         <h2><span>Tips and Tricks!</span></h2>
    //       </div>
    //       <div className="pt-1">
    //         <dl className="list-disc text-left">
    //           <div className="tip">
    //             Add your information early before your bike goes missing!
    //           </div>
    //           <li>
    //             Serial Numbers are hard to remember and it's one of the most
    //             important factors in determining bike ownership.
    //           </li>
    //           <div className="tip">Be thorough with your descriptions!</div>
    //           <li>
    //             Listing things like the custom hardware as well as any unique
    //             identifying features such as scratches or scuffs will help prove
    //             the bike is yours!
    //           </li>
    //           <div className="tip">
    //             Be on the look-out for other missing bikes!
    //           </div>
    //           <li>
    //             An active community will help lower the number of missing bikes
    //             in your area!
    //           </li>
    //         </dl>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Tips;
