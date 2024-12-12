import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center text-[#F4A261] py-8">
      <div className="container w-11/12 flex flex-col items-center justify-between gap-6 mx-auto sm:flex-row">
        {/* Left Section: Copyright and small text */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-bold text-[#F4A261]">Manish Singh</span>. All Rights Reserved.
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/manish-singh-96a2bb273/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Dot-Name" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.instagram.com/manish_singh9899/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://x.com/MANISHS103" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
