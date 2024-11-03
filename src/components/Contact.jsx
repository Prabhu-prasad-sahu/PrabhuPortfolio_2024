import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const SERVICE_KEY = "service_joa26xc";
    const TEMPLATE_KEY = "template_6opk713";
    const PUBLIC_KEY = "fyL0QtWSW7G8_wO7_";

    const tamplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Prabhu",
        message: formData.message,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(SERVICE_KEY, TEMPLATE_KEY, tamplateParams, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    e.target.reset();
                }
            );
    };

    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
                            Let's Talk
                        </h3>
                        <p>I'm open to discussing web development projects or partnership opportunities.</p>
                        <div className='mb-4 mt-8'>
                            <CiMail className='inline-block text-green-400 mr-2' />
                            <a href="mailto:mailprabhu01@gmail.com" className='hover:underline'>
                                mailprabhu01@gmail.com
                            </a>
                        </div>
                        <div className='mb-4 mt-8'>
                            <MdAddCall className='inline-block text-green-400 mr-2' />
                            <span>91-9606602838</span>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaLocationArrow className='inline-block text-green-400 mr-2' />
                            <span>Marathalli, Bangalore</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <Form className='space-y-4' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Name...'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Email...'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Message...'
                                    rows="5"
                                    required
                                />
                            </div>
                            <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                                Send
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
