"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 1, name: 'JavaScript', description: 'All about JavaScript tutorials and tips.' },
    { id: 2, name: 'CSS & Design', description: 'Learn about design techniques and CSS.' },
    { id: 3, name: 'React', description: 'React best practices and tutorials.' },
    { id: 4, name: 'Web Performance', description: 'Optimize and speed up your web apps.' },
    { id: 5, name: 'Backend Development', description: 'Dive into backend technologies and servers.' },
    { id: 6, name: 'Backend Development', description: 'Dive into backend technologies and servers.' },
];

const Categories = () => {
    return (
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Explore Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{category.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
