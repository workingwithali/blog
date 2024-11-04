"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would add your newsletter signup logic
        alert(`Thank you for subscribing with ${email}!`);
        setEmail('');
    };

    return (
        <section className="py-12 px-6 bg-blue-50 dark:bg-blue-900 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Stay updated with our latest posts, tips, and insights. Subscribe now!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                    <motion.input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-auto p-3 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                        required
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-500"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default NewsletterSignup;
