import React from 'react';
import './Navbar.css';
import logo from  '../../assets/logo_original.svg';


const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Our Servises</li>
            <li>Projects</li>
            <li>About us</li>
            <li>Pictures</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
