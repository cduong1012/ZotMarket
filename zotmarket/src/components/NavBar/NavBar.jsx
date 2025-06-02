import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='left-side'>
        <NavLink to='/' className='logo-link'>ZotMarket</NavLink>
      </div>
      <div className='right-side'>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/browse' className='nav-link'>Buy</NavLink>
        <NavLink to='/sell' className='nav-link'>Sell</NavLink>
        <NavLink to='/messages' className='nav-link'>Message</NavLink>
        <NavLink to='/login' className='login'>Login</NavLink>
        <NavLink to='/signup' className='sign-up'>Sign Up</NavLink>
      </div>
    </div>
  )
}

export default NavBar
