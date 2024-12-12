import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';

const Tools = () => {
  const { ref: sectionRef, inView: isSectionInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div className="mt-10 md:mt-0 overflow-y-hidden md:overflow-y-visible">
      <div ref={sectionRef} className="md:flex md:flex-col md:gap-10 hidden">
        {/* Tools & Additional Expertise */}
        <h2
          className={`text-lg text-center text-white translate-y-8 md:translate-y-0 md:text-4xl font-orbitron ${
            isSectionInView ? "animate-slide-in" : "opacity-0"
          }`}
        >
          Tools & Additional Expertise
        </h2>
        <img
          src={`${process.env.PUBLIC_URL}/Assets/tree.png`}
          alt="Tools"
          className={`object-cover mx-8 rounded-lg md:mx-auto ${
            isSectionInView ? "animate-slide-in" : "opacity-0"
          }`}
        />
        <div className="relative flex text-sm text-white md:text-3xl font-saira">
          <h3
            className={`absolute left-1 -top-8 md:top-0 md:-left-4 ${
              isSectionInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            Figma
          </h3>
          <h3
            className={`absolute left-[5rem] -top-8 md:top-0 md:left-[18.5rem] ${
              isSectionInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            Git & GitHub
          </h3>
          <h3
            className={`absolute right-[7rem] -top-8 md:top-0 md:right-[24rem] ${
              isSectionInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            NPM
          </h3>
          <h3
            className={`absolute right-[1.5rem] -top-8 md:top-0 md:-right-[0rem] ${
              isSectionInView ? "animate-slide-in" : "opacity-0"
            }`}
          >
            SEO
          </h3>
        </div>
      </div>

      <div className="block md:hidden">
        {/* Tools & Additional Expertise */}
        <h2 className="text-lg text-center text-white font-orbitron">
          Tools & Additional Expertise
        </h2>

        <ul className="flex flex-col text-sm text-white mt-4 font-saira">
          <li className="flex justify-start items-center gap-2">
            <BsCheckCircleFill />
            Figma
          </li>
          <li className="flex justify-start items-center gap-2">
            <BsCheckCircleFill />
            Git & GitHub
          </li>
          <li className="flex justify-start items-center gap-2">
            <BsCheckCircleFill />
            NPM
          </li>
          <li className="flex justify-start items-center gap-2">
            <BsCheckCircleFill />
            SEO
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
