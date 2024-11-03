import React from 'react'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row item-center  md:space-x-12'>
                    <img src="./Profile.png" alt="prabhu" className='w-72 h-80 object-cover mb-8 md:mb-0 mx-auto md:mx-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8  text-justify '>
                            I am a MERN Stack Developer with 2.4 years of experience in designing, developing, and maintaining web applications. Proficient in JavaScript (ES6+), React.js, Node.js, Express.js, I have hands-on experience building dynamic, user-friendly frontends and scalable backends. Additionally, I am well-versed in MongoDB and SQL databases, ensuring smooth data management and API integration. I have also worked extensively with HTML5, CSS3, and Bootstrap, creating responsive and intuitive user interfaces. My experience includes developing RESTful APIs, implementing authentication, working with version control systems like Git, and collaborating in Agile environments. I am passionate about problem-solving and continuously learning new technologies to improve performance and optimize workflows.
                        </p>
                        <div className='space-y-4'>
                            {/* HTML & CSS Progress Bar */}
                            <div className='flex flex-col md:flex-row items-start'>
                                <label htmlFor="htmlandcss" className='mb-2 md:mb-0 md:w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 w-full'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>

                            {/* JavaScript Progress Bar */}
                            <div className='flex flex-col md:flex-row items-start'>
                                <label htmlFor="javascript" className='mb-2 md:mb-0 md:w-2/12'>JAVASCRIPT</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 w-full'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>

                            {/* React.js Progress Bar */}
                            <div className='flex flex-col md:flex-row items-start'>
                                <label htmlFor="reactjs" className='mb-2 md:mb-0 md:w-2/12'>React.JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 w-full'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
                                </div>
                            </div>

                            {/* Node.js Progress Bar */}
                            <div className='flex flex-col md:flex-row items-start'>
                                <label htmlFor="nodejs" className='mb-2 md:mb-0 md:w-2/12'>Node.JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 w-full'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>

                            {/* Express.js Progress Bar */}
                            <div className='flex flex-col md:flex-row items-start'>
                                <label htmlFor="expressjs" className='mb-2 md:mb-0 md:w-2/12'>Express.js</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5 w-full'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                        </div>


                        <div className='mt-12 flex justify-between text-center '>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>2+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>20+</h3>
                                <p>Projects Complited</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>10+</h3>
                                <p>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About