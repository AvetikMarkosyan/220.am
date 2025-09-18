// import { useState, useEffect } from "react";
// import logo from "@/assets/logo_original.svg";

// const Navbar = () => {
//   const [navbarColor, setNavbarColor] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     const sections = document.querySelectorAll("section");
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavbarColor(window.scrollY > 180);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScrollTo = (e, item) => {
//     e.preventDefault();
//     const section = document.getElementById(item);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(item);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
//         navbarColor ? "bg-[#212ea0]" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <a href="#home">
//           <img src={logo.src} alt="220.am Logo" className="w-44 cursor-pointer" />
//         </a>
//         <ul className="flex space-x-6 text-white text-sm font-medium">
//           {["home", "services", "about", "pictures", "contact-us"].map((item) => (
//             <li
//               key={item}
//               onClick={(e) => handleScrollTo(e, item)}
//               className={`cursor-pointer ${
//                 activeSection === item ? "underline text-yellow-300" : ""
//               }`}
//             >
//               <a href={`#${item}`}>
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo_original.svg";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(item);
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navbarColor ? "bg-[#212EA0]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, "home")}>
          <img
            src={logo.src}
            alt="220.am Logo"
            className="w-44 cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-sm font-medium">
          {["home", "services", "about", "gallery", "contact-us"].map(
            (item) => (
              <li
                key={item}
                onClick={(e) => handleScrollTo(e, item)}
                className={`cursor-pointer ${
                  activeSection === item ? "underline text-yellow-300" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white cursor-pointer">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212EA0] text-white py-6 px-6 space-y-4">
          {["home", "services", "about", "gallery", "contact-us"].map(
            (item) => (
              <div
                key={item}
                onClick={(e) => handleScrollTo(e, item)}
                className={`cursor-pointer block ${
                  activeSection === item ? "underline text-yellow-300" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

