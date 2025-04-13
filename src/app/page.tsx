import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-4 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <div className="text-4xl font-bold tracking-tight">JESSICA</div>
          <div className="text-xs tracking-wider">NAIL & BEAUTY SUPPLY</div>
        </a>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl mx-4">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-12">
            <div className="flex items-center border-r border-gray-300 px-4">
              <select className="bg-transparent appearance-none outline-none text-gray-700 pr-6">
                <option>All</option>
                <option>Nail Products</option>
                <option>Beauty Tools</option>
                <option>Skin Care</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Search for collections" 
              className="flex-grow px-4 py-2 outline-none bg-transparent"
            />
            <button className="px-4" aria-label="Search">
              {/* Microphone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-6">
          <button aria-label="User Account">
            {/* User Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button aria-label="Shopping Cart">
            {/* Shopping Cart Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Category Navigation Bar */}
      <nav className="border-t border-b border-gray-200 py-3">
        <div className="max-w-screen-xl mx-auto">
          <ul className="flex flex-wrap items-center justify-start gap-8 px-4 font-bold">
            <li>
              <a href="#" className="text-black hover:text-gray-600">NEW ARRIVALS</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-600">SHOP CANADIAN</a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP NAILS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP SPA
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP BEAUTY
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-600 flex items-center">
                EQUIPMENT
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-600 flex items-center">
                SALE & OFFERS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Carousel/Slider */}
      <div className="relative w-full overflow-hidden">
        {/* Carousel container */}
        <div className="relative">
          {/* Current slide - April Deals */}
          <div className="relative">
            <div className="relative w-full h-[400px] bg-purple-200">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-full relative flex">
                  {/* Left side - product images */}
                  <div className="w-3/5 relative">
                    {/* Product images placed on purple background */}
                    <div className="absolute top-16 left-12">
                      <div className="w-32 h-40 bg-white/20 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-24 h-24 bg-[url('/api/placeholder/100/100')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </div>
                    <div className="absolute top-40 left-40">
                      <div className="w-44 h-52 bg-white/20 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-36 h-36 bg-[url('/api/placeholder/150/150')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-20 left-20">
                      <div className="w-36 h-36 bg-white/20 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-28 h-28 bg-[url('/api/placeholder/120/120')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-20">
                      <div className="w-32 h-32 bg-white/20 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-24 h-24 bg-[url('/api/placeholder/100/100')] bg-contain bg-center bg-no-repeat"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - text content */}
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
          <a href="#" className="text-gray-600 hover:text-gray-900 underline">View all</a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <img src="/sample-1.jpg" alt="Tippi 4 Steps Pedicure Kit" className="w-[214px] h-[214px] object-contain mx-auto"  />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-gray-500">Tippi</div>
              <h3 className="text-lg font-bold mb-2">Tippi 4 Steps Pedicure Kit</h3>
              <div className="mb-2">
                <span className="text-gray-800 font-bold">From $3.00 CAD</span>
              </div>
              <div className="flex space-x-2 mb-4">
                <button className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-gray-100 border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-gray-200 border border-gray-400"></button>
                <span className="text-gray-600">+5</span>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition">
                  CHOOSE OPTIONS
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <div className="absolute top-2 left-2 bg-purple-700 text-white px-4 py-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                20% off
              </div>
              <img src="/sample-1.jpg" alt="DND DC Mermaid 229 Claret" className="w-[214px] h-[214px] object-contain mx-auto"  />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-gray-500">DND</div>
              <h3 className="text-lg font-bold mb-2">DND DC Mermaid 229 Claret</h3>
              <div className="mb-4">
                <span className="text-gray-800 font-bold">$11.99 CAD</span>
                <span className="text-gray-500 line-through ml-2">$15.00 CAD</span>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <img src="/sample-1.jpg" alt="Korean Sandpaper Regular Nail X File" className="w-[214px] h-[214px] object-contain mx-auto"  />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-gray-500">JNBS</div>
              <h3 className="text-lg font-bold mb-2">Korean Sandpaper Regular Nail X File Gold Wood Board (3 Grit Sizes)</h3>
              <div className="mb-4">
                <span className="text-gray-800 font-bold">$10.50 CAD</span>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition">
                  CHOOSE OPTIONS
                </button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <img src="/sample-1.jpg" alt="Tippi Massage Lotion" className="w-[214px] h-[214px] object-contain mx-auto"  />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-gray-500">Tippi</div>
              <h3 className="text-lg font-bold mb-2">Tippi Massage Lotion (4 scents)</h3>
              <div className="mb-2">
                <span className="text-gray-800 font-bold">From $10.00 CAD</span>
              </div>
              <div className="flex space-x-2 mb-4">
                <button className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-gray-100 border border-gray-400"></button>
                <button className="w-6 h-6 rounded-full bg-gray-200 border border-gray-400"></button>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition">
                  CHOOSE OPTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
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

      {/* Popular Categories Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">POPULAR CATEGORIES</h2>
        
        {/* Category Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* BOSSYGEL */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="BOSSYGEL" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">BOSSYGEL</h3>
              </div>
            </div>
          </div>
          
          {/* DND */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="DND" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">DND</h3>
              </div>
            </div>
          </div>
          
          {/* APRES */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="APRES" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">APRES</h3>
              </div>
            </div>
          </div>
          
          {/* NOTPOLISH */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="NOTPOLISH" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">NOTPOLISH</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* OPI */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="OPI" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">OPI</h3>
              </div>
            </div>
          </div>
          
          {/* NEVERMIND */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="NEVERMIND" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">NEVERMIND</h3>
              </div>
            </div>
          </div>
          
          {/* LAMPS */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="LAMPS" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">LAMPS</h3>
              </div>
            </div>
          </div>
          
          {/* E-FILES */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="E-FILES" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">E-FILES</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category Grid - Third Row (wider cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CND */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="CND" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">CND</h3>
              </div>
            </div>
          </div>
          
          {/* ESSENTIALS */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="ESSENTIALS" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">ESSENTIALS</h3>
              </div>
            </div>
          </div>
          
          {/* CERTIFICATION EVENTS */}
          <div className="relative overflow-hidden group">
            <div className="aspect-square bg-purple-100 overflow-hidden">
              <img src="/api/placeholder/400/400" alt="CERTIFICATION EVENTS" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white text-center">CERTIFICATION EVENTS</h3>
              </div>
            </div>
          </div>
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