import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";

import Signup from './Signup.js';

const Login = () => {

    return (

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

                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********" />
                    </div>
                    <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    </div>

                </form>
                <HashRouter>
                    <div className="flex justify-center">
                        <p className="pt-2 pr-6">Not a member?</p>
                        <NavLink exact to="/Signup" activeClassName="current-nav" className="nav-link" replace>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign Up
                            </button>
                        </NavLink>

                        <Switch>
                            <Route path="/Signup" component={Signup} />
                        </Switch>
                    </div>
                </HashRouter>

                </div>
            </div>

    )
}

export default Login;