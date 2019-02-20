import React from 'react';
import logo from '../logo.svg';

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" /><h1>Local Weather App</h1>
            </header>
        </div>
    )
}

export default Header;