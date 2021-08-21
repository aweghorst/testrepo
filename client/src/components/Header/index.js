import React from 'react';

import Nav from '../Nav';

import '../../assets/styles/header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <h1 className="brand-title">Find My Bike</h1>
                </div>
                <div className="nav-section">
                    <Nav />
                </div>
            </header>
        </div>
    )
}

export default Header;