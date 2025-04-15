// app/category/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import CategoryHeader from '@/components/CategoryHeader';
import SortControls from '@/components/SortControls';
import ProductLayout from '@/components/ProductLayout';
import ProductCard from '@/components/ProductCard';
import { getCategoryBySlug } from '@/lib/categories';
import { getProducts } from '@/lib/products';

// Define props for params
interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  // Make sure to await params before using it
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const category = await getCategoryBySlug(slug);
  
  // If category doesn't exist, show 404
  if (!category) {
    notFound();
  }
  
  // Get products for this category
  const { products } = await getProducts({
    category: slug,
    limit: 12
  });
  
  // Filter sections for this category
  const filterSections = [
    {
      title: 'Brand',
      expanded: true,
      options: [
        { id: category.name.toLowerCase(), label: category.name, count: category.productCount }
      ]
    },
    {
      title: 'Product type',
      expanded: true,
      showMore: true,
      options: [
        { id: 'gel-polish', label: 'Gel Polish', count: 25 },
        { id: 'base-coat', label: 'Base Coat', count: 5 },
        { id: 'top-coat', label: 'Top Coat', count: 4 },
        // Add more options based on category
      ]
    }
  ];
  
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: category.name, isActive: true }
  ];
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-8 bg-white">
        <BreadcrumbNavigation items={breadcrumbItems} />
        <CategoryHeader title={category.name} count={category.productCount} />
        
        <SortControls />

        <ProductLayout filterSections={filterSections}>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto w-full">
              {products.map(product => (
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
          ) : (
            <p className="text-center py-8">No products found in this category.</p>
          )}
        </ProductLayout>

      </div>
    </main>
  );
}