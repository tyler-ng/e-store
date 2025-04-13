import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-4 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-black">
          <div className="text-4xl font-bold tracking-tight">JESSICA</div>
          <div className="text-xs tracking-wider">NAIL & BEAUTY SUPPLY</div>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl mx-4">
          <div className="flex items-center bg-black rounded-full overflow-hidden h-12 border border-gray-300">
            <div className="flex items-center border-r border-gray-500 px-4">
              <select className="bg-transparent appearance-none outline-none text-white pr-6">
                <option>All</option>
                <option>Nail Products</option>
                <option>Beauty Tools</option>
                <option>Skin Care</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Search for collections" 
              className="flex-grow px-4 py-2 outline-none bg-transparent text-white placeholder-gray-300"
            />
            <button className="px-4" aria-label="Search">
              {/* Microphone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-6">
          <button aria-label="User Account" className="text-black">
            {/* User Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button aria-label="Shopping Cart" className="text-black">
            {/* Shopping Cart Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Category Navigation Bar */}
      <nav className="border-t border-b border-gray-200 py-3 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <ul className="flex flex-wrap items-center justify-start gap-8 px-4 font-bold text-black">
            <li>
              <Link href="#" className="text-black hover:text-gray-600">NEW ARRIVALS</Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:text-gray-600">SHOP CANADIAN</Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP NAILS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP SPA
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="text-black hover:text-gray-600 flex items-center">
                SHOP BEAUTY
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="text-black hover:text-gray-600 flex items-center">
                EQUIPMENT
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="#" className="text-black hover:text-gray-600 flex items-center">
                SALE & OFFERS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}