import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
    threshold: 0.3, // Triggers when 10% of the component is visible
  });

  return (
    <div id="about" className="flex items-center justify-center pb-10 mt-10 mb-10 overflow-x-hidden text-left pt-28 sm:pb-6 sm:mt-6 sm:mb-6">
      <div
        className="flex flex-col items-center justify-center w-11/12 sm:w-full md:w-9/12 sm:flex-col md:flex-row"
        ref={ref} // Attach the ref to the parent container
      >
        {/* Image Section */}
        <div
          className={`mt-6 sm:mt-8 md:mt-0 w-full md:w-[50%] flex justify-center sm:order-1 md:order-2 sm:mb-6`}
          style={{
            transform: `translateX(${inView ? 0 : -500}%)`, // Slide in from the left
            transition: 'transform 0.5s ease-out',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Assets/About section.png`}
            alt="About"
            className="object-cover w-full max-w-xs rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full text-center sm:text-left sm:order-2 md:order-1"
          style={{
            transform: `translateX(${inView ? 0 : -500}%)`, // Same effect for text
            transition: 'transform 0.5s ease-out',
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl font-orbitron">
            About Me
          </h2>
          <div className='text-sm text-white font-saira md:text-lg lg:text-2xl'>

            <p>I am Manish Singh, a MERN stack developer from Delhi, India. I specialize in building dynamic web and mobile applications with expertise in React, Node.js, MongoDB, and Express.</p>

            <p>I am also the founder of <strong>Godims</strong>, a platform offering services such as web and Android development, graphic design, and SEO. Alongside my development skills, I am enhancing my problem-solving abilities by learning data structures and algorithms in C++.</p>

            <p>Passionate about continuous learning, I aim to contribute to impactful projects while exploring fields like game and mobile app development.</p>

            <p>Connect with me on <a className='text-blue-300' href="https://www.linkedin.com/in/manish-singh-96a2bb273/">LinkedIn</a> or check out my work on <a className='text-blue-300' href="https://github.com/Dot-Name">GitHub</a>.</p>
          </div>

          <div className="flex justify-center sm:justify-start">
            {/* Using Link from react-scroll to scroll to the contact section */}
            <Link
              to="contact" // The target section's ID
              smooth={true} // Smooth scrolling effect
              duration={500} // Duration of the scroll in milliseconds
              className="relative inline-block px-4 py-2 mt-5 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full animate-bounce sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
