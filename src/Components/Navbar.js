import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <input 
                type="text" 
                placeholder="Search a movie, Tv Show or Celebrity" 
                name="search"  
            />
            <ul>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/tvshows">Tv Shows</Link>
                </li>
                <li>
                    <Link to="/celebs">Celebrities</Link>
                </li>
            </ul>
        </nav>
    )
}
