// import React from 'react';
// import './Navbar.css';
// import logo from  '../../assets/logo_original.svg';


// const Navbar = () => {
//   return (
//     <nav className='container'>
//         <img src={logo} alt="" className='logo' />
//         <ul>
//             <li>Home</li>
//             <li>Our Servises</li>
//             <li>Projects</li>
//             <li>About us</li>
//             <li>Gallery</li>
//             <li><button className='btn'>Contact us</button></li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo_original.svg';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false); // For navbar color change
  const [activeSection, setActiveSection] = useState('home'); // For active menu item

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe relative to the viewport
      threshold: 0.6
      // , // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Change navbar color based on scroll position
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 180);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${navbarColor ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {['home', 'services', 'projects', 'about', 'pictures', 'contact us'].map((item) => (
          <li
            key={item}
            onClick={() => setActiveSection(item)}
            className={activeSection === item ? 'btn' : ''}
          >
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
