import React from 'react';
import { useInView } from 'react-intersection-observer';

const Frontend = () => {
  const useScrollAnimation = (direction) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const translateX = direction === 'left' ? '-100%' : '100%';

    return {
      ref,
      style: {
        transform: inView ? 'translateX(0)' : `translateX(${translateX})`,
        transition: 'transform 1s ease-out',
      },
    };
  };

  const reactAnimation = useScrollAnimation('right');
  const htmlAnimation = useScrollAnimation('left');
  const jsAnimation = useScrollAnimation('right');
  const tailwindAnimation = useScrollAnimation('left');

  return (
    <div className='relative flex flex-col items-center justify-center w-full pb-10 mt-10 mb-10 text-left pt-28'>
      <h2 className='text-2xl text-center text-white md:text-4xl font-orbitron'>Frontend Development</h2>

      {/* Main Container */}
      <div className='relative w-11/12 h-[600px] md:h-[1200px] mt-10'>
        {/* Centered Images */}
        <img 
          src={`${process.env.PUBLIC_URL}/Assets/path.png`} 
          alt="frontend" 
          className="absolute w-10 transform -translate-x-1/2 rounded-lg left-1/2 top-16 md:w-16"
        />
        <img 
          src={`${process.env.PUBLIC_URL}/Assets/path.png`} 
          alt="frontend" 
          className="absolute w-10 rounded-lg left-1/2 transform -translate-x-1/2 md:top-[33rem] md:w-16 top-[22rem]"
        />

        {/* React.js Section */}
        <div
          ref={reactAnimation.ref}
          style={reactAnimation.style}
          className='absolute top-[13.5rem] md:top-[19rem] right-10 md:right-32 md:glass'
        >
          <h2 className='text-xl text-right text-white md:text-center md:text-3xl font-orbitron'>React.js</h2>
          <p className='hidden text-sm text-right text-white sm:hidden md:hidden lg:block md:text-center md:text-2xl font-saira'>
            Proficient in building dynamic,<br /> single-page applications.
          </p>
        </div>

        {/* HTML & CSS Section */}
        <div
          ref={htmlAnimation.ref}
          style={htmlAnimation.style}
          className='absolute top-[22.5rem] md:text-center md:left-32 md:top-[34rem]'
        >
          <h2 className='text-xl text-left text-white md:text-center md:text-3xl font-orbitron'>HTML, CSS</h2>
          <p className='hidden text-2xl text-white sm:hidden md:hidden lg:block font-saira'>
            Expert in semantic, responsive <br />design.
          </p>
        </div>

        {/* JavaScript Section */}
        <div
          ref={jsAnimation.ref}
          style={jsAnimation.style}
          className='absolute md:text-center right-0 top-[31.5rem] md:right-32 md:top-[48rem]'
        >
          <h2 className='text-xl text-right text-white md:text-center md:text-3xl font-orbitron'>JavaScript</h2>
          <p className='hidden text-2xl text-white sm:hidden md:hidden lg:block font-saira'>
            Skilled in modern JavaScript <br /> techniques and libraries.
          </p>
        </div>

        {/* Tailwind CSS Section */}
        <div
          ref={tailwindAnimation.ref}
          style={tailwindAnimation.style}
          className='absolute -left-[1rem] top-[40.5rem] md:left-32 md:top-[63rem]'
        >
          <h2 className='text-xl text-left text-white md:text-center md:text-3xl font-orbitron'>Tailwind CSS</h2>
          <p className='hidden text-2xl text-center sm:hidden text-white md:hidden lg:block font-saira'>
            Expertise in creating fast,<br /> responsive, and beautiful designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
