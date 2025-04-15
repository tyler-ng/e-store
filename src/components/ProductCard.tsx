import React from 'react';
import Link from 'next/link';
import { StarIcon } from './Icons';

interface ProductCardProps {
  id: string;
  brand: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discount?: {
    type: 'percentage' | 'fixed' | 'upto';
    amount: number;
  };
  slug: string;
  hasOptions?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  brand,
  name,
  image,
  rating,
  reviewCount,
  price,
  originalPrice,
  discount,
  slug,
  hasOptions = true
}) => {
  const formattedPrice = `$${price.toFixed(2)} CAD`;
  const formattedOriginalPrice = originalPrice ? `$${originalPrice.toFixed(2)} CAD` : '';
  
  // Determine if this is "From $X" or just "$X"
  const priceDisplay = hasOptions ? `From ${formattedPrice}` : formattedPrice;
  
  // Determine which button to show
  const buttonText = hasOptions ? 'CHOOSE OPTIONS' : 'ADD TO CART';
  
  // Path to product page
  const productUrl = `/product/${slug}`;
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative">
        {/* Discount Tag */}
        {discount && (
          <div className="absolute top-2 right-2 z-10 bg-purple-700 text-white px-3 py-1 text-xs font-medium rounded-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {discount.type === 'upto' ? `Up to ${discount.amount}% off` : 
             discount.type === 'percentage' ? `${discount.amount}% off` : 
             `$${discount.amount} off`}
          </div>
        )}
        
        {/* Product Image */}
        <Link href={productUrl}>
          <img 
            src={image} 
            alt={name} 
            className="w-[266px] h-[266px] object-contain mx-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      
      <div className="p-4">
        {/* Brand */}
        <div className="text-sm text-gray-500 mb-1">{brand}</div>
        
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2">
          <Link href={productUrl} className="hover:text-purple-700 transition">
            {name}
          </Link>
        </h3>
        z
        {/* Ratings */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i}
                filled={i < Math.floor(rating)}
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline">
            {hasOptions && <span className="text-sm text-gray-500 mr-1">From</span>}
            <span className="text-lg font-bold text-gray-900">{formattedPrice}</span>
          </div>
          {originalPrice && originalPrice > price && (
            <div className="text-sm text-gray-500 line-through">{formattedOriginalPrice}</div>
          )}
        </div>
        
        {/* Button */}
        <Link href={productUrl}>
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;