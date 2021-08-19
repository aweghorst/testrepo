import React from 'react';

const Signup = () => {
    return (
        <div className="">
            <div className="flex p-20 justify-center">
                <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input 
                    className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username" />
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********" />
                    </div>
                    <div className="flex justify-center">
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="password" placeholder="Example@email.com" />
                    </div>
                    <div className="flex justify-center">
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" type="password" placeholder="City Name" />
                    </div>
                    <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                    </div>

                </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;