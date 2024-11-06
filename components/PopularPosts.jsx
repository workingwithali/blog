"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const popularPosts = [
    { id: 1, title: 'Mastering JavaScript Promises', views: 1200, excerpt: 'Learn how to work with promises effectively in JavaScript.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/posts/js-promises' },
    { id: 2, title: 'Responsive Design with CSS Flexbox', views: 950, excerpt: 'A guide to creating responsive layouts using Flexbox.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/posts/css-flexbox' },
    { id: 3, title: 'Understanding React Hooks', views: 850, excerpt: 'An introduction to Hooks and their use cases in React.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/posts/react-hooks' },
    { id: 4, title: 'Next.js SEO Optimization Tips', views: 750, excerpt: 'Boost your Next.js app’s visibility with SEO best practices.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/posts/nextjs-seo' },
    { id: 5, title: 'Getting Started with TypeScript', views: 680, excerpt: 'A beginner’s guide to TypeScript and its key features.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/posts/typescript-guide' },
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
                        <Link href={post.link}>
                            <div className="relative mb-4">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-md"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.views} views</p>
                        <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PopularPosts;
