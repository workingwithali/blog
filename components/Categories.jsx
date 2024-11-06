"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
    { id: 1, name: 'JavaScript', description: 'All about JavaScript tutorials and tips.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'CSS & Design', description: 'Learn about design techniques and CSS.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'React', description: 'React best practices and tutorials.', image:'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Web Performance', description: 'Optimize and speed up your web apps.', image: '/images/https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Backend Development', description: 'Dive into backend technologies and servers.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'DevOps', description: 'Learn about automation and DevOps practices.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Categories = () => {
    return (
        <section className="py-12 px-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
            <h2
                className="text-3xl font-bold text-center mb-8"
                style={{ color: 'hsl(var(--foreground))' }}
            >
                Explore Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-lg shadow-lg cursor-pointer"
                        style={{
                            backgroundColor: 'hsl(var(--card))',
                            color: 'hsl(var(--card-foreground))',
                        }}
                    >
                        <Image
                            src={category.image}
                            alt={`${category.name} icon`}
                            className="w-16 h-16 mb-4 object-cover mx-auto"
                        />
                        <h3
                            className="text-xl font-semibold"
                            style={{ color: 'hsl(var(--foreground))' }}
                        >
                            {category.name}
                        </h3>
                        <p
                            className="mt-2"
                            style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                            {category.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
