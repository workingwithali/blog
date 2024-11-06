import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-2xl">About the Blog</h2>
          <p className="text-gray-400">
            Sharing insights, tips, and stories to inspire and educate readers on a journey of knowledge and discovery.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Categories</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#technology" className="hover:text-white">Technology</a></li>
            <li><a href="#design" className="hover:text-white">Design</a></li>
            <li><a href="#lifestyle" className="hover:text-white">Lifestyle</a></li>
            <li><a href="#productivity" className="hover:text-white">Productivity</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400">Get the latest posts delivered right to your inbox.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-4 text-gray-400">
        <a href="#facebook" aria-label="Facebook" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
        </a>
        <a href="#twitter" aria-label="Twitter" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
        </a>
        <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Your Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
