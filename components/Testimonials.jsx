"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";


const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO at Tech Innovations',
        content: 'This blog provides amazing insights into the tech industry. I always find valuable information in every post!',
        imageUrl: '/images/john-doe.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Software Engineer at DevWorks',
        content: 'The tutorials here have helped me grow my skills immensely. Highly recommended for any aspiring developer!',
        imageUrl: '/images/jane-smith.jpg',
    },
    {
        id: 3,
        name: 'Carlos Rios',
        title: 'Product Manager at Innovate Inc.',
        content: 'Engaging, informative, and always up-to-date. This blog has become one of my go-to resources.',
        imageUrl: '/images/carlos-rios.jpg',
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">What People Are Saying</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                    >
                        <div className="flex items-center mb-4">
                            <Image
                                src={testimonial.imageUrl}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
