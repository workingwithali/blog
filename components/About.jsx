"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-12 px-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: 'hsl(var(--foreground))' }}
                >
                    About Me
                </h2>
                <p
                    className="text-lg"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                    Welcome to my blog! I'm Ali Rashid, a software engineer passionate about
                    Generative AI and frontend development. Here, I share insights on web
                    development, programming, and tech trends to help others on their learning
                    journey. Join me as we explore new ideas and build great digital experiences
                    together.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
