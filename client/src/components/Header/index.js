import React from 'react';

import Nav from '../Nav';

import '../../assets/styles/header.css';

import bikeSleuth from '../../assets/images/bikesleuthbanner.jpg'

const Header = () => {
    return (
        <div>
            <header>
                <div className="justify-center">
                    <img src={bikeSleuth} className="min-w-full" alt="banner with sloth riding bike down forest road"/>
                    <h1 className="brand-title text-center">BikeSleuth</h1>
                    <div className="nav-section">
                    <Nav />
                </div>
              
                </div>
            </header>
        </div>
    )
}

export default Header;