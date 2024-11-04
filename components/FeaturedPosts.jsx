"use client";
import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    { id: 1, title: 'Understanding JavaScript Closures', date: 'Nov 1, 2024', excerpt: 'A deep dive into closures in JavaScript and their applications.' },
    { id: 2, title: 'CSS Grid vs. Flexbox', date: 'Oct 28, 2024', excerpt: 'Comparing CSS Grid and Flexbox for modern web layouts.' },
    { id: 3, title: 'React Performance Optimization', date: 'Oct 21, 2024', excerpt: 'Tips and tricks to optimize your React apps.' },
];

const FeaturedPosts = () => {
    return (
        <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
                            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;