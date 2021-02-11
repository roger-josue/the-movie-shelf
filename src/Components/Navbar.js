import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link 
                to="/"
                className="navbar__home-link">
                    TMS 
                    <i className="fas fa-video navbar__home-link-icon"></i>
                </Link>
            <input 
                type="text" 
                className="navbar__search"
                placeholder="Search" 
                name="search"  
            />
            <div className="navbar__menu-toggle">
                <input className="menu-toggle__check" type="checkbox" />
                <span className="menu-toggle__toggler">
                </span>
            </div>
            <ul className="navbar__menu">
                <li className="menu__link">
                    <Link to="/movies">Movies</Link>
                </li>
                <li className="menu__link">
                    <Link to="/tvshows">Tv Shows</Link>
                </li>
                <li className="menu__link">
                    <Link to="/celebs">Celebrities</Link>
                </li>
            </ul>
        </nav>
    )
}
