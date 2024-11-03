import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50">
            <div className='container py-2 flex justify-center  text-center md:justify-between items-center '>
                <a href="#home">
                    <div className='text-2xl font-bold hidden md:inline'>
                        PRABHU.
                    </div>
                </a>
                <div className='flex justify-center space-x-6 '>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About</a>
                    <a href="#service" className='hover:text-gray-400'>Service</a>
                    <a href="#project" className='hover:text-gray-400'>Project</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                {/* Contact button visible only on screens larger than laptop (lg) */}
                <a href="#contact">
                    <button className='hidden lg:inline bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        Contact Me
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
