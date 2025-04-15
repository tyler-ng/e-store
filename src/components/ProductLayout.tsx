// components/ProductLayout.tsx
"use client";

import React, { ReactNode, useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
  expanded?: boolean;
  showMore?: boolean;
}

interface ProductLayoutProps {
  filterSections: FilterSection[];
  children: ReactNode;
  className?: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  filterSections: initialFilterSections,
  children,
  className = '',
}) => {
  // Manage state internally
  const [filterSections, setFilterSections] = useState(initialFilterSections);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  // Handle filter change internally
  const handleFilterChange = (sectionId: string, optionId: string, checked: boolean) => {
    console.log(`Filter changed: ${sectionId} - ${optionId} - ${checked}`);
    
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev };
      if (!updatedFilters[sectionId]) {
        updatedFilters[sectionId] = [];
      }
      
      if (checked) {
        updatedFilters[sectionId] = [...updatedFilters[sectionId], optionId];
      } else {
        updatedFilters[sectionId] = updatedFilters[sectionId].filter(id => id !== optionId);
      }
      
      return updatedFilters;
    });
  };

  // Handle section toggle internally
  const handleToggleSection = (sectionId: string) => {
    console.log(`Toggle section: ${sectionId}`);
    
    setFilterSections(prev => 
      prev.map(section => {
        if (section.title.toLowerCase().replace(/\s+/g, '-') === sectionId) {
          return { ...section, expanded: !section.expanded };
        }
        return section;
      })
    );
  };

  // Rest of your component with the updated event handlers
  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      {/* Sidebar Filters */}
      <div className="w-full lg:w-1/4 lg:pr-8">
        {filterSections.map((section, sectionIndex) => (
          <div key={section.title.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{section.title}</h3>
              <button 
                onClick={() => handleToggleSection(section.title.toLowerCase().replace(/\s+/g, '-'))}
                aria-label={`${section.expanded ? 'Collapse' : 'Expand'} ${section.title} section`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={section.expanded ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} 
                  />
                </svg>
              </button>
            </div>
            {section.expanded !== false && (
              <div className="space-y-3">
                {section.options.map((option) => (
                  <label key={option.id} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 rounded border-gray-300" 
                      onChange={(e) => handleFilterChange(
                        section.title.toLowerCase().replace(/\s+/g, '-'),
                        option.id,
                        e.target.checked
                      )}
                      checked={selectedFilters[section.title.toLowerCase().replace(/\s+/g, '-')]?.includes(option.id) || false}
                    />
                    <span className="ml-2 text-base">{option.label}</span>
                    <span className="ml-auto text-gray-500">({option.count})</span>
                  </label>
                ))}
                {section.showMore && (
                  <button className="text-gray-600 hover:text-gray-900 hover:underline mt-3 inline-block">
                    Show more
                  </button>
                )}
              </div>
            )}
            {sectionIndex < filterSections.length - 1 && (
              <div className="border-t border-gray-200 my-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* Product Content */}
      <div className="w-full lg:w-3/4">
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;