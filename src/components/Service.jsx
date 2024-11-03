import React from 'react'

const service = [
    {
        id: 1,
        title: "Frontend Development with React",
        description: "Designing responsive and dynamic user interfaces using React.js and modern UI libraries like Material-UI and Tailwind CSS."
    },
    {
        id: 2,
        title: "Backend Development with Node & Express",
        description: "Creating robust RESTful APIs and handling server-side logic using Node.js and Express.js."
    },
    {
        id: 3,
        title: "Database Management with MongoDB",
        description: "Storing and managing data efficiently using MongoDB, with schema design and query optimization."
    },
    {
        id: 4,
        title: "Full-stack Application Development",
        description: "Developing complete web applications with seamless interaction between frontend and backend using React, Node, Express, and MongoDB."
    },
    {
        id: 5,
        title: "Authentication and Authorization",
        description: "Implementing secure user authentication and role-based access control using JWT, OAuth, and Passport.js."
    },
    {
        id: 6,
        title: "State Management in React",
        description: "Managing complex application state using React Context API, Redux, or React Query."
    }
]

const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Service</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {service.map((service) => (
                        <div
                            key={service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
                        >
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                {service.id}
                            </div>
                            <h3 className='text-xl font-semibold mt-2'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{service.description}</p>
                            <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service
