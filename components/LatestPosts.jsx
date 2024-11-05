"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const latestPosts = [
    {
        id: 1,
        title: 'Exploring the Power of Next.js for SEO',
        excerpt: 'Learn how Next.js can boost your website’s SEO with server-side rendering.',
        imageUrl: '/images/seo.jpg'
    },
    {
        id: 2,
        title: 'The Ultimate Guide to Tailwind CSS',
        excerpt: 'An in-depth guide to using Tailwind CSS to create responsive designs effortlessly.',
        imageUrl: '/images/tailwind.jpg'
    },
    {
        id: 3,
        title: 'JavaScript Async/Await Simplified',
        excerpt: 'Master asynchronous JavaScript programming with async/await.',
        imageUrl: '/images/async.jpg'
    },
];

const LatestPosts = () => {
    return (
        <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Latest Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    >
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LatestPosts;