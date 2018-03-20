import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Header =() =>{
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {"|"}
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
            {"|"}
            <NavLink exact to="/courses" activeClassName="active">Courses</NavLink>
        </nav>
    );
};

export default Header;