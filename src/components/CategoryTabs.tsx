import React from 'react';
import { NewsCategory } from '../types/news';

interface CategoryTabsProps {
  categories: NewsCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-black border-b border-green-500 font-mono sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-green-300 py-2 text-sm">
          user@worldnews:~$ ls /news/categories/
        </div>
        <nav className="flex space-x-1 pb-4 overflow-x-auto">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 text-sm font-mono border transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-green-500 text-black border-green-500'
                : 'bg-gray-900 text-green-400 border-green-500 hover:bg-green-900'
            }`}
          >
            [ALL]
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-4 py-2 text-sm font-mono border transition-colors whitespace-nowrap ${
                activeCategory === category.slug
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-gray-900 text-green-400 border-green-500 hover:bg-green-900'
              }`}
            >
              [{category.name.toUpperCase()}]
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategoryTabs;