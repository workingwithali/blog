"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Welcome to my blog! I'm Ali Rashid, a software engineer passionate about Generative AI and frontend development. Here, I share insights on web development, programming, and tech trends to help others on their learning journey. Join me as we explore new ideas and build great digital experiences together.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
