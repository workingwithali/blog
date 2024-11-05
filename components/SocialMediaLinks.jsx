"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
    { id: 1, name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/yourprofile' },
    { id: 2, name: 'Twitter', icon: <FaTwitter />, url: 'https://www.twitter.com/yourprofile' },
    { id: 3, name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/yourprofile' },
    { id: 4, name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/yourprofile' },
    { id: 5, name: 'GitHub', icon: <FaGithub />, url: 'https://www.github.com/yourprofile' },
];

const SocialMediaLinks = () => {
    return (
        <section className="py-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Connect with us</h2>
            <div className="flex justify-center gap-6">
                {socialLinks.map((link) => (
                    <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        aria-label={link.name}
                    >
                        <span className="text-3xl">{link.icon}</span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default SocialMediaLinks;
