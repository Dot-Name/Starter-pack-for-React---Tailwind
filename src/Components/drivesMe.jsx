import React from 'react';
import { useInView } from 'react-intersection-observer';

const DrivesMe = () => {
  // Using Intersection Observer to detect when elements are in view
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.05,   // 5% of the element is in view for better mobile visibility
  });

  return (
    <div className="h-auto mt-10 mb-10 overflow-x-hidden sm:mt-6 sm:mb-6">
      <div
        ref={sectionRef}
        className="flex flex-col flex-wrap items-center justify-center w-11/12 pt-10 overflow-x-hidden sm:pt-6 md:pt-28"
        style={{
          transform: `translateX(${isInView ? 0 : '50vw'})`, // Use percentage for better mobile adaptability
          opacity: isInView ? 1 : 0, // Fade in effect
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out', // Faster transitions for smaller screens
        }}
      >
        <div className="flex flex-col items-center justify-center w-full px-4 overflow-x-hidden sm:w-full md:flex-row md:w-10/12">
          {/* Image Section */}
          <div className="w-full mt-6 overflow-hidden md:mt-0 md:w-5/12">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/what_drives_me.gif`}
              alt="Drives me"
              className="object-cover w-full mx-auto rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* Text Section */}
          <div className="mt-6 text-center sm:text-right md:mt-0 md:w-7/12">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-6xl font-orbitron">
              What Drives Me?
            </h2>
            <p className="overflow-y-hidden text-base text-white sm:text-lg md:text-xl lg:text-2xl font-saira">
              I believe technology has the power to solve real-world problems and make people's lives easier. I am constantly learning and exploring new technologies to stay on top of trends and improve my skill set. Whether it’s crafting a stunning UI, building a robust backend, or optimizing for performance, I’m always up for a challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivesMe;
