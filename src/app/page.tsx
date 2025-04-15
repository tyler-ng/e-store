
import React from 'react';
import Link from 'next/link';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { fetchHomePageData } from './actions';
import { getPopularCategories } from '../lib/categories';

export default async function Home() {
  // Fetch data for homepage
  const { featuredProducts, newArrivals, saleItems } = await fetchHomePageData();
  const popularCategories = await getPopularCategories();

  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <Navbar/>

      {/* Hero Carousel/Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="relative">
          <div className="relative w-full h-[400px] bg-purple-200">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-full relative flex">
                <div className="w-3/5 relative">
                  {/* Product images would go here */}
                </div>
                
                <div className="w-2/5 flex flex-col justify-center pr-12">
                  <h2 className="text-7xl font-serif text-purple-900 leading-tight">
                    APRIL<span className="text-white font-light">deals</span>
                  </h2>
                  <div className="flex items-center mt-4">
                    <span className="uppercase text-purple-800 text-5xl font-bold mr-4">UPTO</span>
                    <span className="text-9xl font-bold text-gray-300 opacity-80">60<span className="text-6xl">%</span></span>
                  </div>
                  <div className="text-5xl text-purple-800 uppercase font-bold mt-2">OFF</div>
                  <div className="mt-6 bg-purple-400 bg-opacity-50 text-white text-xl py-2 px-6 rounded-full inline-block">
                    April 1st - April 30th
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <span className="text-white">2</span>
            <span className="text-white">/</span>
            <span className="text-white">2</span>
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">NEW ARRIVALS</h2>
          <Link href="/category/new-arrivals" className="text-gray-600 hover:text-gray-900 underline">View all</Link>
        </div>

        <Suspense fallback={<div>Loading products...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                slug={product.slug}
                hasOptions={product.hasOptions}
              />
            ))}
          </div>
        </Suspense>
      </section>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="mx-4 w-[10%]">
            <hr className="border-t-2 border-black" />
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>

      {/* POPULAR CATEGORIES */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">POPULAR CATEGORIES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {popularCategories.slice(0, 4).map(category => (
            <Link key={category.id} href={`/category/${category.slug}`} className="relative overflow-hidden group">
              <div className="aspect-square bg-purple-100 overflow-hidden">
                <img 
                  src={category.image || "/api/placeholder/400/400"} 
                  alt={category.name} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {popularCategories.slice(4, 8).map(category => (
            <Link key={category.id} href={`/category/${category.slug}`} className="relative overflow-hidden group">
              <div className="aspect-square bg-purple-100 overflow-hidden">
                <img 
                  src={category.image || "/api/placeholder/400/400"} 
                  alt={category.name} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Column 1 - Logo and Shop Local */}
            <div>
              <div className="mb-6">
                <div className="text-4xl font-bold tracking-tight">JESSICA</div>
                <div className="text-xs tracking-wider">NAIL & BEAUTY SUPPLY</div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Shop Local</h3>
              <p className="mb-4">Thank you for visiting our website! We are a family owned business that has been operating since 2006</p>
              <p className="mb-4">We are always trying to improve our service & customer experience, if you have any feedback we would love to hear it at ORDERS@JESSICANAILSUPPLY.COM</p>
            </div>

            {/* Column 2 - Policies */}
            <div>
              <h3 className="text-xl font-bold mb-4">Policies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Shipping Policy</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Return Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Recall Notice</a></li>
                <li><a href="#" className="hover:underline">Brand Ambassadors</a></li>
                <li><a href="#" className="hover:underline">Wholesale</a></li>
                <li><a href="#" className="hover:underline">MSDS</a></li>
              </ul>
            </div>

            {/* Column 3 - Contact Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="uppercase font-bold mb-4">CONTACT US</p>
              <p className="mb-4">39 Orfus Road, Unit A1, M6A 1L7, North York, Canada</p>
              <p className="mb-4">Call Us: 647 - 435 - 3856</p>
              <p className="mb-4">Orders@JessicaNailSupply.com</p>
              
              <div className="mt-6">
                <p className="mb-2">HOURS (Winter Seasonal 2025)</p>
                <p className="text-sm mb-4">*hours subject to change</p>
                
                <p className="mb-2"><span className="font-bold">Saturday</span> 10am-4:00pm</p>
                <p className="mb-2"><span className="font-bold">Sunday-Thursday</span> 10am-4:30pm</p>
                <p className="mb-2"><span className="font-bold">Friday</span> Closed</p>
              </div>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-6">Sign up for exclusive offers, original stories, events and more.</p>
              
              <div className="flex mb-8">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white px-4 py-2 rounded-l-full text-gray-800 w-full focus:outline-none"
                />
                <button className="bg-white text-gray-800 rounded-r-full px-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Country Selector */}
              <div className="mb-4">
                <button className="bg-white text-gray-800 rounded-full px-4 py-2 flex items-center justify-between w-64">
                  <span>Canada (CAD $)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Payment Methods */}
              <div className="flex space-x-2 mt-8">
                <img src="/api/placeholder/40/25" alt="Apple Pay" className="h-8 bg-white rounded" />
                <img src="/api/placeholder/40/25" alt="Google Pay" className="h-8 bg-white rounded" />
                <img src="/api/placeholder/40/25" alt="Mastercard" className="h-8 bg-white rounded" />
                <img src="/api/placeholder/40/25" alt="Shop Pay" className="h-8 bg-white rounded" />
                <img src="/api/placeholder/40/25" alt="Visa" className="h-8 bg-white rounded" />
              </div>
            </div>
          </div>

          {/* Footer Bottom - Copyright */}
          <div className="pt-8 mt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
            <p>© 2025 Jessica Nail & Beauty Supply. Powered by Shopify</p>
          </div>
        </div>
      </footer>
      
    </main>
  );
}