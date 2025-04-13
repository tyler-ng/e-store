"use client";

import React from 'react';

interface SortControlsProps {
  className?: string;
  sortOptions?: Array<{
    value: string;
    label: string;
  }>;
  defaultSortOption?: string;
  onSortChange?: (value: string) => void;
  compareEnabled?: boolean;
  onCompareChange?: (enabled: boolean) => void;
  viewModeGrid?: boolean;
  onViewModeChange?: (grid: boolean) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  className = '',
  sortOptions = [
    { value: 'best-selling', label: 'Best selling' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
  ],
  defaultSortOption = 'best-selling',
  onSortChange,
  compareEnabled = false,
  onCompareChange,
  viewModeGrid = true,
  onViewModeChange,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSortChange) {
      onSortChange(e.target.value);
    }
  };

  const handleCompareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCompareChange) {
      onCompareChange(e.target.checked);
    }
  };

  const handleViewModeChange = (grid: boolean) => {
    if (onViewModeChange) {
      onViewModeChange(grid);
    }
  };

  return (
    <div className={`flex items-center justify-between py-4 border-b border-gray-200 mb-6 w-full ${className}`}>
      <div className="flex items-center">
        <span className="mr-2 font-medium">Sort by</span>
        <div className="relative">
          <select 
            className="appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onChange={handleSortChange}
            defaultValue={defaultSortOption}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <span className="mr-2 font-medium">Compare</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={compareEnabled}
              onChange={handleCompareChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-800"></div>
          </label>
        </div>
        
        <div className="flex items-center">
          <span className="mr-2 font-medium">View as</span>
          <div className="flex space-x-2">
            <button 
              className={`p-1 ${!viewModeGrid ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              onClick={() => handleViewModeChange(false)}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              className={`p-1 ${viewModeGrid ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              onClick={() => handleViewModeChange(true)}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortControls;