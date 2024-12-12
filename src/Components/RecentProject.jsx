import React from 'react';


// Use process.env.PUBLIC_URL to construct image paths
const projects = [
  { imgSrc: `${process.env.PUBLIC_URL}/Assets/p1.png`, logoSrc: `${process.env.PUBLIC_URL}/Assets/new_logo_BA.avif`, name: 'Butterfly Ayurveda', link: 'https://butterflyayurveda.com/' },
  { imgSrc: `${process.env.PUBLIC_URL}/Assets/p2.png`, logoSrc: `${process.env.PUBLIC_URL}/Assets/plogo.png`, name: 'Zappy Herbal', link: 'https://zappyherbal.com/' },
  { imgSrc: `${process.env.PUBLIC_URL}/Assets/p3.png`, logoSrc: `${process.env.PUBLIC_URL}/Assets/plogo1.png`, name: 'Movinair Shoes', link: 'https://movinairshoes.com/' },
  { imgSrc: `${process.env.PUBLIC_URL}/Assets/p4.png`, logoSrc: `${process.env.PUBLIC_URL}/Assets/plogo2.svg`, name: 'Karen Didion', link: 'https://karendidion.com/' },
];

const ProjectCard = ({ imgSrc, logoSrc, name, link }) => (
  <div className="flex flex-col items-center font-saira">
    
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-transform duration-200 transform hover:scale-105"
      >
        <div className="relative overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105 hover:shadow-lg">
          <img src={imgSrc} alt={name} className="object-cover w-full h-full aspect-video" />
        </div>
        <div className="flex items-center justify-between w-full mt-3">
          <div className="flex items-center">
            <img
              src={logoSrc}
              alt={`${name} Logo`}
              className="object-contain w-8 h-8 mr-3 transition-transform duration-300 transform rounded-full hover:scale-105"
            />
            <span className="capitalize cursor-pointer font-saira text-l hover:text-red-500">{name}</span>
          </div>
      </div>
      </a>
  </div>
);

const RecentProject = () => (
  <div className='mt-40 ' id='projects'>
    <div className="py-12 px-7 sm:px-6 lg:px-12 font-orbitron">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl ">
            Recent Projects
          </h2>
          
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="grid w-9/12 grid-cols-1 gap-20 py-12 -mt-8 text-white portfolio sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-7 sm:px-6 lg:px-12 lg:-mt-4 font-saira">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            logoSrc={project.logoSrc}
            name={project.name}
            link={project.link}
          />
        ))}
      </div>
    </div>

  </div>
);

export default RecentProject;
