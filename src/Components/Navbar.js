import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png'
import { connect } from 'react-redux';
import { toggleNav, closeNavbar } from '../Redux/Action/itemActions';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logoBtn">
                    <Link to="/"><img src={Logo} alt="Logo" />
                        <p><span>M</span>arket</p>
                    </Link>
                    <div className="shopping-icon mobile-shopping">
                        <Link to="/cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span>{props.item.cart.length}</span>
                        </Link>
                    </div>
                    <div className="hamburger" onClick={props.toggleNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="links">
                    <div className={props.item.isOpen ? "new-links-navigation" : "links-navigation"}>
                        <div className="nav-btn">
                            <span onClick={props.toggleNav}><i class="fas fa-minus-circle"></i></span>
                        </div>
                        <ul className="links-nav" onClick={props.closeNavbar}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {/* <li><Link to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                </div>
                <Link to="/cart">
                    <div className="shopping-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span>{props.item.cart.length}</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { toggleNav, closeNavbar })(Navbar);
