"use client";

import React from 'react';
import { motion } from 'framer-motion';

const popularPosts = [
    { id: 1, title: 'Mastering JavaScript Promises', views: 1200, excerpt: 'Learn how to work with promises effectively in JavaScript.' },
    { id: 2, title: 'Responsive Design with CSS Flexbox', views: 950, excerpt: 'A guide to creating responsive layouts using Flexbox.' },
    { id: 3, title: 'Understanding React Hooks', views: 850, excerpt: 'An introduction to Hooks and their use cases in React.' },
    { id: 4, title: 'Next.js SEO Optimization Tips', views: 750, excerpt: 'Boost your Next.js app’s visibility with SEO best practices.' },
    { id: 5, title: 'Getting Started with TypeScript', views: 680, excerpt: 'A beginner’s guide to TypeScript and its key features.' },
];

const PopularPosts = () => {
    return (
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Popular Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.views} views</p>
                        <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PopularPosts;
