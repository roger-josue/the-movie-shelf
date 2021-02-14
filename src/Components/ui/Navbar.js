import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');
    const [toggleMenu, setToggleMenu] = useState(false);
    const menu = useRef(null);

    useEffect(() => {
        
        window.addEventListener('resize', () =>{
            if( window.innerWidth >= 768){
                menu.current.style = 'visibility: visible;';
            }
            else{
                setToggleMenu(false);
                menu.current.style = 'visibility: hidden;';
            }
        });

        return () => {
            window.removeEventListener('resize',window);
        }
    }, [])

    const handleActive = ( active ) => {
        setActiveLink(active);    
    }

    const handleToggle = (e) => {
        setToggleMenu( toggle => !toggle );
        if( toggleMenu) {
            menu.current.style = 'animation: menu-out 200ms ease-in-out forwards';
        } else{
            menu.current.style = 'animation: menu-in 200ms ease-in-out forwards';
        }
    }

    return (
        <nav className="navbar">
            <Link 
                to="/"
                className="navbar__home-link"
                onClick={() => handleActive('') }>
                    TMShelf 
                    <i className="fas fa-video navbar__home-link-icon"></i>
                </Link>
            <div className="navbar__search">
                <input 
                    type="text" 
                    className="navbar__search__input"
                    size="5"
                    placeholder="Search a movie, tv show or celebrity" 
                    name="search"  
                />
                <button className="navbar__search__btn"> <i className="fas fa-search"></i> </button>

            </div>
            <div className="navbar__menu-toggle">
                <input 
                    className="menu-toggle__check" 
                    type="checkbox"
                    checked={ toggleMenu} 
                    onChange={ handleToggle } /
                >
                <span className="menu-toggle__toggler">
                </span>
            </div>
            <ul 
                ref={ menu }
                className="navbar__menu">
                <li className="menu__link">
                    <Link 
                        to="/movies"
                        className={ (activeLink === 'movies') ? 'menu__link--active' : ''} 
                        onClick={() => handleActive('movies') } >
                            <i className="fas fa-film"></i>
                            Movies
                    </Link>
                </li>
                <li className="menu__link">
                    <Link 
                        to="/tvshows"
                        className={ (activeLink === 'tvshows') ? 'menu__link--active' : ''} 
                        onClick={() => handleActive('tvshows') }>
                            <i className="fas fa-tv"></i>
                            Tv Shows
                    </Link>
                </li>
                <li className="menu__link">
                    <Link 
                        to="/celebs"
                        className={ (activeLink === 'celebs') ? 'menu__link--active' : ''} 
                        onClick={() => handleActive('celebs') }>
                            <i className="fas fa-user-friends "></i>
                            Celebrities
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
