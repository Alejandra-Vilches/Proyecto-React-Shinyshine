import React from 'react';

import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to ='/' style={{ textDecoration: 'none' }}>
                <h2 className='p-5 titulo'>Shinyshine</h2>
            </Link>
            <div className='Categories estilos-categorias'>
                <NavLink to={'/category/skincare'} className={({isActive}) => isActive ? 'ActiveOption m-5 estilos-nav' : 'Option m-5 estilos-nav-normal'} style={{ textDecoration: 'none' }}> Skincare</NavLink>
                <NavLink to={'/category/pestanas'} className={({isActive}) => isActive ? 'ActiveOption m-5 estilos-nav' : 'Option m-5 estilos-nav-normal'} style={{ textDecoration: 'none' }}> Pestañas</NavLink>
                <NavLink to={'/category/impress'} className={({isActive}) => isActive ? 'ActiveOption m-5 estilos-nav' : 'Option m-5 estilos-nav-normal'} style={{ textDecoration: 'none' }}> Uñas Impress</NavLink>
                
            </div>
            <NavLink style={{textDecoration: 'none'}} to='/cart'><CartWidget/></NavLink>
        </nav>
    )
}

export default NavBar