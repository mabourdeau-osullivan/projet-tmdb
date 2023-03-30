import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./Logo";


const Navigation = () => {
    return (
        <div className="menu-background">
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li>
                            <NavLink exact to="/" activeClassName="active" className="nav-link">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search" activeClassName="active" className="nav-link">
                                Recherche
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories" activeClassName="active" className="nav-link">
                                Categories
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Link to="/">
            <Logo />
            </Link>
            <Link to="Search">
            <div className="search-container">
            
            <i className="fas fa-search search-icon header-icon"></i>
            </div>
            </Link>
            
        </div >
    )
}

export default Navigation;