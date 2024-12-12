import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility change when the page loads
    setVisible(true);
  }, []);

  return (
    <div
      className={`fixed bottom-0 z-10 flex items-center justify-center w-full h-14 bg-customCyan shadow-t-lg transform transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <nav className="flex justify-center">
        <ul className="flex items-center gap-6 py-4 text-white sm:gap-8 md:gap-12 font-orbitron">
          {[
            { icon: <FaHome size={25} />, label: "Home", to: "home" },
            { icon: <FaUserAlt size={25} />, label: "About Me", to: "about" },
            { icon: <FaTools size={25} />, label: "Skills", to: "skills" },
            { icon: <FaProjectDiagram size={25} />, label: "Projects", to: "projects" },
            { icon: <FaEnvelope size={25} />, label: "Contact", to: "contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center cursor-pointer group"
            >
              {/* Rainbow/Slash Shape Text */}
              <span className="absolute bottom-12 text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 group-hover:text-sm sm:group-hover:text-base md:group-hover:text-2xl group-hover:translate-y-[-50px] group-hover:rotate-[15deg] group-hover:skew-x-[10deg] group-hover:scale-125 transition-all duration-300">
                {item.label}
              </span>

              {/* Icon */}
              <div className="p-3 transition-all duration-300 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white">
                <Link
                  to={item.to} // Use the 'to' attribute to link to the section id
                  smooth={true} // Smooth scroll effect
                  offset={-70} // Adjust the scroll position, if needed (e.g., to avoid Navbar overlap)
                  duration={500} // Duration of the scroll
                >
                  {item.icon}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
