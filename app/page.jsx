import Image from "next/image";
import { Button } from "../components/ui/button";
import FeaturedPosts from '../components/FeaturedPosts';
import Categories from '../components/Categories';
import About from '../components/About';
import PopularPosts from '../components/PopularPosts';
import NewsletterSignup from '../components/NewsletterSignup';
import LatestPosts from '../components/LatestPosts';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';




export default function Home() {
  return (

    <main>

      <section className="container lg:h-screen px-4 py-10 mx-auto  lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input
                type="search"
                name="query"
                placeholder="Search Blog"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="px-4 lg:px-0 py-16 bg-gray-100 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose a plan that suits your needs.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Basic Plan */}
          <div className="text-center w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400"><s>Feature 2</s></li>
              <li className="text-gray-600 dark:text-gray-400"><s>Feature 3</s></li>
              <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
            </ul>
            <Button className="mx-1" variant="outline">
              Choose Plan
            </Button>
          </div>

          {/* Standard Plan - Bestseller */}
          <div className="text-center w-full max-w-sm p-8 xl:p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border-2 border-primary">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
            <span className=" inline-block px-3 py-1 text-sm font-bold text-white rounded-full bg-primary">BestSeller</span>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
            </ul>
            <Button className="mx-1" variant="outline">
              Choose Plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="text-center w-full max-w-sm p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
            </ul>
            <Button className="mx-1" variant="outline">
              Choose Plan
            </Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4" >
        <FeaturedPosts />
      </div>
      <section className="container mx-auto p-4">
        <Categories />
      </section>
      <section className="container mx-auto p-4">
        <About />
      </section>
      <section className="container mx-auto p-4">
        <PopularPosts />
      </section>
      <section className="container mx-auto p-4">
        <NewsletterSignup />
      </section>
      <section className="container mx-auto p-4">
        <LatestPosts />
      </section>
      <section className="container mx-auto p-4">
        <SocialMediaLinks />
      </section>
      <section className="container mx-auto p-4">
        <Testimonials />
      </section>
      {/* <section className="container mx-auto p-4">
        <Footer />
      </section> */}
    </main>
  );
}
