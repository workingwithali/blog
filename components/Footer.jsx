"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">your-email@example.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a></p>
                    </div>

                    {/* Important Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <div className="space-x-4">
                            <Link href="/privacy-policy">
                                <motion.a whileHover={{ scale: 1.1 }} className="hover:text-blue-400 transition-colors">Privacy Policy</motion.a>
                            </Link>
                            <Link href="/terms">
                                <motion.a whileHover={{ scale: 1.1 }} className="hover:text-blue-400 transition-colors">Terms of Service</motion.a>
                            </Link>
                            <Link href="/about">
                                <motion.a whileHover={{ scale: 1.1 }} className="hover:text-blue-400 transition-colors">About Us</motion.a>
                            </Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <FaFacebook className="text-2xl hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </a>
                        <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </a>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <FaInstagram className="text-2xl hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </a>
                        <a href="https://www.github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <FaGithub className="text-2xl hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
