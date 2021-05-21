import React from 'react'
import {  NavLink } from 'react-router-dom'
import AppContext from '../AppContext/AppContext';
import {useContext} from 'react';

const Navbar = () => {

    const { logout }  = useContext(AppContext);
    
    const handleLogout = () => {
        logout();
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            

            <div className="container navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Form"
                    >
                        Create Post
                    </NavLink>
                </div>
            </div>

            <div className="ml-5">
                <ul className="navbar-nav mr-5">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link mr-5" 
                        onClick={handleLogout}
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar