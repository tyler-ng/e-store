import React from 'react';

interface CategoryHeaderProps {
  title: string;
  count?: number;
  className?: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  title, 
  count, 
  className = ''
}) => {
  return (
    <div className={`border-b border-gray-200 pb-6 mb-6 ${className}`}>
      <h1 className="text-5xl font-bold text-gray-900">
        {title} 
        {count !== undefined && (
          <span className="text-xl font-normal text-gray-500">
            ({count.toLocaleString()} {count === 1 ? 'PRODUCT' : 'PRODUCTS'})
          </span>
        )}
      </h1>
    </div>
  );
};

export default CategoryHeader;