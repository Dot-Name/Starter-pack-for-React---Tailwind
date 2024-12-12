import React from 'react';
import Frontend from "./frontend";
import Backend from "./backend";
import Tools from "./tools";

const Skills = () => {
  return (
    <div id='skills' className='flex items-center justify-center w-screen px-4 pb-10 mt-10 mb-10 overflow-x-hidden text-left pt-28 sm:px-6 md:px-0'>
      <div className="flex flex-col items-center justify-center w-full h-auto md:h-[3600px] overflow-x-hidden">
        {/* Title */}
        <h2 className='text-4xl font-bold text-center text-white sm:text-4xl md:text-5xl font-orbitron'>
          Skills & Expertise
        </h2>
        
        {/* img */}
        {/* <img src={`${process.env.PUBLIC_URL}/Assets/skills.gif`} alt="skills" /> */}

        {/* Frontend Section */}
        <Frontend />

        {/* Backend Section */}
        <Backend />

        {/* Tools Section */}
        <Tools />
      </div>
    </div>
  );
};

export default Skills;
