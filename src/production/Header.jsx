import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import mainlogo from './IMAGE/mainlogo.png'

function Header() {
    return (
        <>
            <header>

                {/* <!-- -------section-1--------- --> */}
                <div className="navbar">

                    <div className="nav-logo">
                        <div className="logo" style={{ backgroundImage: `url(${mainlogo})` }}><Link to='/'>
                            <img src="" alt="" />
                        </Link></div>
                    </div>
                    <div className="nav-contact">
                        <div className="contact border">
                            <i className="fa-solid fa-phone"></i>
                            <p>+91-1234567890</p>
                        </div>
                        <div className="contact border">
                            <i className="fa-solid fa-map-location"></i>
                            <p>Address</p>
                        </div>
                    </div>
                    <div className="nav-search hov">
                        <select className="search-opn">
                            <option>All</option>
                            <option>Fertilizer</option>
                            <option>Pesticides</option>
                            <option>Gardening</option>
                            <option>Organic product</option>
                            <option>Crop care</option>
                            <option>Cattle Feed</option>
                            <option>Crops</option>
                            <option>Seeds</option>
                        </select>
                        <input placeholder="Search Product" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="nav-account">
                        <div className="account border">
                            <i className="fa-solid fa-circle-user"></i>
                            <p className="border"><NavLink to='/login' >Login</NavLink></p>
                        </div>
                        <div className="account border">
                            <i className="fa-solid fa-user-plus"></i>
                            <p><NavLink to='/account'>Create Account</NavLink></p>
                        </div>
                    </div>
                    <div className="nav-cart">
                        <div className="cart border">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>

                {/* <!-- ---------section-2---------- --> */}
                <div className="manubar">
                    <div className="flex">
                        <div className="men-menu">
                            <div className="border">
                                {/* <!-- <button className="bar">click</button> --> */}
                                <i className="fa-solid fa-bars bar"></i>
                            </div>
                        </div>
                        <ul className="manu-list">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? "red" : "black"}>Home</NavLink></li>
                            <li><NavLink to='/Service' className={({ isActive }) => isActive ? "red" : "black"}  >Service</NavLink></li>
                            <li><NavLink to='/Product' className={({ isActive }) => isActive ? "red" : "black"} >Product</NavLink></li>
                            <li><NavLink to='/About' className={({ isActive }) => isActive ? "red" : "black"} >About</NavLink></li>
                        </ul>
                    </div>
                    <div className="men-box hov">
                        <div className="box-icon">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="box-para">
                            <p>To Order, Please Call</p>
                            <p>Toll Free-0188-0853-25</p>
                        </div>
                    </div>
                </div>

                <div className="men-item item-go">
                    <ul>
                        <li><a href="#">Fertilizer</a></li>
                        <li><a href="#">Pesticides</a></li>
                        <li><a href="#">Gardening</a></li>
                        <li><a href="#">Organic product</a></li>
                        <li><a href="#">Crop care</a></li>
                        <li><a href="#">Cattle Feed</a></li>
                        <li><a href="#">Crops</a></li>
                        <li><a href="#">Seeds</a></li>
                    </ul>
                </div>

            </header>
        </>
    )
}

export default Header
