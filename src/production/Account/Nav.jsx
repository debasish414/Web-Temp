import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="manubar">
            <ul className="manu-list">
                <li><NavLink to='/' className={({ isActive }) => isActive ? "red" : "black"}>Home</NavLink></li>
                <li><NavLink to='/Service' className={({ isActive }) => isActive ? "red" : "black"}  >Service</NavLink></li>
                <li><NavLink to='/Product' className={({ isActive }) => isActive ? "red" : "black"} >Product</NavLink></li>
                <li><NavLink to='/About' className={({ isActive }) => isActive ? "red" : "black"} >About</NavLink></li>
            </ul>
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

    )
}
