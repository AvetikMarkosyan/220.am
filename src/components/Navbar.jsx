// import { useState, useEffect } from "react";
// import logo from "@/assets/logo_original.svg";
// import "./Navbar.css";

// const Navbar = () => {
//   const [navbarColor, setNavbarColor] = useState(false); // For navbar color change
//   const [activeSection, setActiveSection] = useState("home"); // For active menu item

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, observerOptions);

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

//   const handleScrollTo = (e, item)=>{
//     e.preventDefault();
//     const section = document.getElementById(item);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(item);
//   }

//   return (
//     <nav className={`container ${navbarColor ? "scrolled" : ""}`}>
//       <img src={logo} alt="Logo" className="logo" />
//       <ul>
//         {[
//           "home",
//           "services",
//           "about",
//           "pictures",
//           "contact us",
//         ].map((item) => (
//           <li
//             key={item}
//             onClick={(e)=>handleScrollTo(e, item)}
//             className={activeSection === item ? "btn" : ""}
//           >
//             <a href={`#${item}`}>
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import logo from "@/assets/logo_original.svg";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         <img src={logo.src} alt="220.am Logo" className="w-44" />
//         <ul className="flex space-x-6 text-sm font-medium text-gray-800">
//           {['home', 'services', 'projects', 'about', 'pictures'].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 className="hover:text-blue-600 transition-colors"
//               >
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
import logo from "@/assets/logo_original.svg";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navbarColor ? "bg-[#212ea0]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src={logo.src} alt="220.am Logo" className="w-44" />
        <ul className="flex space-x-6 text-white text-sm font-medium">
          {["home", "services", "about", "pictures", "contact us"].map((item) => (
            <li
              key={item}
              onClick={(e) => handleScrollTo(e, item)}
              className={`cursor-pointer ${
                activeSection === item ? "underline text-yellow-300" : ""
              }`}
            >
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
