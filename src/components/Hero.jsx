import React from 'react';

const Hero = () => {
    return (
        <div className="bg-black text-white h-screen flex flex-col justify-center items-center text-center space-y-8" id='home'>
            <img
                src="./Profile.png"
                alt="prabhu"
                className="w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Prabhu Prasad Sahu
                </span>
                , Full-Stack Developer
            </h1>
            <p className="text-lg text-gray-300  p-4 md:p-6">
                I specialize in building modern and responsive web applications.
            </p>
            <div className="space-x-4">
                <a href="#contact">
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full">
                        Contact Me
                    </button>
                </a>
                <a href="/Prabhu-Prasad.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-500 transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full">
                        Resume
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Hero;
