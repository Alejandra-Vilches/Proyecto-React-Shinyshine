import React from 'react';

import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to ='/'>
                <h2>Shinyshine</h2>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/skincare'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Skincare</NavLink>
                <NavLink to={'/category/pestanas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pestañas</NavLink>
                <NavLink to={'/category/impress'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Uñas Impress</NavLink>
                
            </div>
            <NavLink style={{textDecoration: 'none'}} to='/cart'><CartWidget/></NavLink>
        </nav>
    )
}

export default NavBar