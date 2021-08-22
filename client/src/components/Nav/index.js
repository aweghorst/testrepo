import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from "react-router-dom";

import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import Search from '../../pages/Search';
import Tips from '../../pages/Tips';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Message from '../../pages/Message';

import NoMatch from '../../pages/NoMatch';

import '../../assets/styles/nav.css';

import Auth from '../../utils/auth';

const Nav = () => {

    return (
        <HashRouter>
        <div>
            <nav className="nav-section">
                <ul>
                    <li className="main-nav">
                        <NavLink exact to="/" activeClassName="current-nav" className="nav-link" replace>Home</NavLink>
                    </li>
                    <li className="main-nav"> 
                        <NavLink exact to="/Dashboard" activeClassName="current-nav" className="nav-link" replace>Dashboard</NavLink>
                    </li>
                    <li className="main-nav">
                        <NavLink exact to="/Search" activeClassName="current-nav" className="nav-link" replace>Search</NavLink>
                    </li>
                    <li className="main-nav">
                        <NavLink exact to="/Tips" activeClassName="current-nav" className="nav-link" replace>Tips</NavLink>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                        <li className="login-out nav-link" onClick={Auth.logout}>Logout</li>
                        </>
                    ) : (
                        <li id="login-out">
                        <NavLink exact to="/Login" activeClassName="current-nav" className="nav-link" replace>Login</NavLink>
                        </li>
                    )}
                </ul>

            </nav>
        </div>
                    <div className="object-center">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Dashboard" component={Dashboard} />
                            <Route path="/Search" component={Search} />
                            <Route path="/Tips" component={Tips} />
                            <Route path="/Login" component={Login} />
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Message" component={Message} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
        </HashRouter>
    );
};

export default Nav;