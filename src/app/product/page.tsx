"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import CategoryHeader from '@/components/CategoryHeader';
import SortControls from '@/components/SortControls';
import ProductLayout from '@/components/ProductLayout';

export default function ProductPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'BOSSYGEL', isActive: true }
    ];

    // Filter sections data
    const filterSections = [
        {
        title: 'Brand',
        expanded: true,
        options: [
            { id: 'bossy', label: 'BOSSY', count: 1030 }
        ]
        },
        {
        title: 'Product type',
        expanded: true,
        showMore: true,
        options: [
            { id: 'acrylic-dipping-powders', label: 'Acrylic & Dipping Powders', count: 25 },
            { id: 'acrylic-brush', label: 'Acrylic Brush', count: 5 },
            { id: 'airbrush-gel', label: 'Airbrush Gel', count: 1 },
            { id: 'art-brush', label: 'Art Brush', count: 5 },
            { id: 'base-coat', label: 'Base Coat', count: 4 },
            { id: 'builder-gel', label: 'Builder Gel', count: 19 },
            { id: 'cat-eye-gel', label: 'Cat Eye Gel', count: 113 }
        ]
        }
    ];

    // State for sorting and viewing options
    const [sortOption, setSortOption] = useState('best-selling');
    const [compareEnabled, setCompareEnabled] = useState(false);
    const [viewModeGrid, setViewModeGrid] = useState(true);
    const [sections, setSections] = useState(filterSections);

    const handleFilterChange = (sectionId: string, optionId: string, checked: boolean) => {
        console.log(`Filter changed: ${sectionId} - ${optionId} - ${checked}`);
        // In a real implementation, you would update your product list based on selected filters
    };

    const handleToggleSection = (sectionId: string) => {
        setSections(prevSections => 
          prevSections.map(section => 
            section.title.toLowerCase().replace(/\s+/g, '-') === sectionId
              ? { ...section, expanded: !section.expanded }
              : section
          )
        );
    };

    // Sample product data that matches the image
    const products = [
        {
        id: 'bossy-gel-supershine',
        brand: 'BOSSY',
        name: 'Bossy Gel Supershine No Wipe Top Coat',
        image: '/sample-2.jpg', // Using product-1.jpg image
        rating: 5,
        reviewCount: 36,
        price: 13.00,
        originalPrice: 15.00,
        discount: {
            type: 'upto' as const,
            amount: 20,
        },
        slug: 'bossy-gel-supershine-no-wipe-top-coat',
        hasOptions: true,
        },
        {
        id: 'bossy-gel-base',
        brand: 'BOSSY',
        name: 'Bossy Gel Base Coat',
        image: '/sample-2.jpg', // Using sample-2.jpg image
        rating: 5,
        reviewCount: 13,
        price: 12.50,
        originalPrice: 15.00,
        discount: {
            type: 'upto' as const,
            amount: 20,
        },
        slug: 'bossy-gel-base-coat',
        hasOptions: true,
        },
        {
        id: 'bossy-gel-polish',
        brand: 'BOSSY',
        name: 'Bossy Gel Polish BS 183 White',
        image: '/sample-2.jpg', // Using sample-2.jpg image
        rating: 3,
        reviewCount: 1,
        price: 10.00,
        slug: 'bossy-gel-polish-bs-183-white',
        hasOptions: false,
        },
    ];

    return (
        <main className="min-h-screen bg-white">
        {/* Top Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="max-w-screen-xl mx-auto px-4 py-8 bg-white">
            {/* Using the BreadcrumbNavigation component */}
            <BreadcrumbNavigation items={breadcrumbItems} />

            {/* Using the CategoryHeader component */}
            <CategoryHeader title="BOSSYGEL" count={1030} />

            {/* Using the SortControls component */}
            <SortControls 
            defaultSortOption={sortOption}
            onSortChange={setSortOption}
            compareEnabled={compareEnabled}
            onCompareChange={setCompareEnabled}
            viewModeGrid={viewModeGrid}
            onViewModeChange={setViewModeGrid}
            />

            {/* Using the ProductLayout component */}
            <ProductLayout 
                  filterSections={sections}
            >
            <div className={`grid grid-cols-1 ${viewModeGrid ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'} gap-6 overflow-y-auto`}>
                {/* Using our ProductCard component for each product */}
                {products.map(product => (
                <ProductCard 
                    key={product.id}
                    {...product}
                />
                ))}
            </div>
            </ProductLayout>
        </div>
        </main>
    );
}