import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
const Header = ({ loading }) => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {"|"}
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
            {"|"}
            <NavLink exact to="/courses" activeClassName="active">Courses</NavLink>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};
export default Header;