import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const HeroSection = () => {
  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Effect to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Trigger the animation on page load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInView(true);
    }, 300); // Delay the animation to allow the page to load

    return () => clearTimeout(timeout);
  }, []);

  // Calculate scroll-based animation values
  const translateImage = scrollY > 0 ? `translateX(-${Math.min(scrollY / 2, 150)}%)` : 'translateX(-150%)';
  const translateText = scrollY > 0 ? `translateX(${Math.min(scrollY / 2, 150)}%)` : 'translateX(150%)';

  return (
    <div className="flex items-center justify-center pt-10 pb-10 overflow-x-hidden sm:pt-6 sm:pb-6" id="home">
      <div className="flex flex-col items-center justify-center w-11/12 sm:flex-row sm:w-9/12">
        {/* Image Container */}
        <div
          className={`w-full sm:w-[50%] aspect-square overflow-hidden transform transition-all duration-700`}
          style={{ transform: inView ? 'translateX(0)' : translateImage }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Assets/its_me.gif`}
            alt="Manish Singh"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Text Content */}
        <div
          className={`mt-6 sm:mt-0 sm:ml-8 sm:w-[50%] transform transition-all duration-700`}
          style={{ transform: inView ? 'translateX(0)' : translateText }}
        >
          <h1 className="mb-4 text-2xl font-bold text-center text-white sm:text-left sm:text-3xl md:text-4xl lg:text-5xl font-orbitron">
            "Crafting Digital Experiences with Precision and Innovation"
          </h1>
          <p className="mb-6 text-base text-center text-white sm:text-left sm:text-lg md:text-xl lg:text-2xl font-saira">
            Welcome to my portfolio! I’m Manish, a full-stack developer dedicated to turning your ideas into sleek, functional, and visually captivating web applications. Whether it’s intuitive UI/UX design or powerful backend systems, I combine the latest tech with creative problem-solving to deliver high-quality results. Let’s create the future of the web, together.
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link
              to="skills" // Target the Skills section
              smooth={true} // Enable smooth scroll
              offset={-70} // Adjust for any offset like fixed navbar
              duration={500} // Duration of the scroll
            >
              <button className="relative animate-bounce inline-block px-4 py-2 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan">
                Discover My Expertise
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
