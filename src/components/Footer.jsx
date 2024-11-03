import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container px-8 md:px-16 lg:px-24'>
                <div className='flex  flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Prabhu.</h3>
                        <p className='text-gray-400'>I am Prabhuprasad Sahu, based in India, specialized in MERN stack development.</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-center'>
                            <input type="email" placeholder='Enter Email..'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                            />
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-r-lg'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400'>&copy;{new Date().getFullYear()} Prabhu. All rights reserved . </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="https://www.facebook.com/pravu.pravu.7127/" className='text-gray-400 hover:text-white'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/mr_pravu/" className='text-gray-400 hover:text-white'>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/mr_pravu/" className='text-gray-400 hover:text-white'>
                            <FaInstagramSquare />
                        </a>
                        <a href="https://github.com/Prabhu-prasad-sahu" className='text-gray-400 hover:text-white'>
                            <FaGithub />
                        </a>
                        <a href="https://medium.com/@prabhu001" className='text-gray-400 hover:text-white'>
                            <FaMedium />
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Privacy
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Term & Service
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer