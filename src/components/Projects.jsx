import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
const projects = [
    {
        id: 1,
        name: "Crypto Page",
        technology: "React.js",
        image: "./Crypto.png",
        github: "https://github.com/Prabhu-prasad-sahu/Crypto_Page",
        live: "https://prabhuprasad-portfolio.netlify.app"
    },
    {
        id: 2,
        name: "Dice Game",
        technology: "React.js",
        image: "./dice.png",
        github: "https://github.com/Prabhu-prasad-sahu/Dice-Game",
        live: "https://prabhuprasad-portfolio.netlify.app"

    },
    {
        id: 3,
        name: "ToDo List",
        technology: "React",
        image: "./to-do.png",
        github: "https://github.com/Prabhu-prasad-sahu/To-Do",
        live: "https://todoprabhu.netlify.app"

    },
    {
        id: 4,
        name: "E-Commerce Store",
        technology: "Express.js",
        image: "./Ecom.png",
        github: "https://github.com/Prabhu-prasad-sahu/ExpressJs-E-commerce",
        live: "https://prabhuprasad-portfolio.netlify.app"

    },
    {
        id: 5,
        name: "Portfolio Website",
        technology: "HTML, CSS, JS",
        image: "./Port.png",
        github: "https://github.com/Prabhu-prasad-sahu/My-portfolio",
        live: "https://prabhuprasad-portfolio.netlify.app"

    },
    {
        id: 6,
        name: "Nike Page",
        technology: "React.js",
        image: "./Nike.png",
        github: "https://github.com/Prabhu-prasad-sahu/Brand_page",
        live: "https://prabhuprasad-portfolio.netlify.app"

    },
    {
        id: 7,
        name: "Pokemon",
        technology: "React.js",
        image: "./pokemon.png",
        github: "https://github.com/Prabhu-prasad-sahu/Pokemon",
        live: "https://prabhu-pokemon.netlify.app"

    },
    {
        id: 8,
        name: "Foodzone",
        technology: "React.js , Express.js",
        image: "./Foodzone.png",
        github: "https://github.com/Prabhu-prasad-sahu/Hotel-Project",
        live: "https://prabhuprasad-portfolio.netlify.app"
    }
];
const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='project'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Project</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className='bg-gray-500 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
                        >
                            <img src={project.image} alt="image"
                                className='rounded-lg mb-4 w-full h-48 object-cover'
                            />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technology}</p>
                            <div className='flex gap-3'>
                                <a href={project.github}
                                    className='text-2xl text-green-500  '
                                    target='_blank'
                                    rel='noopener noreferrer'
                                ><FaGithub /></a>
                                <a href={project.live}
                                    className='text-2xl  text-green-500   '
                                    target='_blank'
                                    rel='noopener noreferrer'
                                ><CiStreamOn /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects