import React from 'react'
import propsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title,icon})  => {  
    return (
        <nav className='navbar bg-primary'>
            <h1> <i className={icon}></i> {title}</h1>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title:"Boom",
    icon:"fab fa-github"
}

// detail of each props 
Navbar.propsTypes = { 
    title: propsTypes.string.isRequired,
    icon: propsTypes.string.isRequired,
}
export default Navbar