import React from 'react';
import Backing from '../Assets/backing.jpg';
import Products from './Products';
import './Home.css';
import Contact from './Contact';

const Home = () => {
    return (
        <React.Fragment>
            <div className="home" style={{ backgroundImage: `url(${Backing})` }}>
                <div className="banner">
                    <h1>Welcome to our store</h1>
                </div>
            </div>
            <Products />
            <Contact />
        </React.Fragment>
    )
}

export default Home
