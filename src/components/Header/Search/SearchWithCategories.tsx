'use client'

import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SearchWithCategories = ({ onSearch }: { onSearch: (query: string, category: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const categories = [
    { label: "All Categories", value: "0" },
    { label: "Desktop", value: "1" },
    { label: "Laptop", value: "2" },
    { label: "Monitor", value: "3" },
    { label: "Phone", value: "4" },
    { label: "Watch", value: "5" },
    { label: "Mouse", value: "6" },
    { label: "Tablet", value: "7" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCategory);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
      <form onSubmit={handleSearch} className="flex w-full">
        {/* Categories Dropdown */}
        <div className="relative" ref={categoryRef}>
          <button
            type="button"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center justify-between h-full px-4 py-2 bg-background hover:bg-background text-foreground border border-gray-300 rounded-l-lg focus:outline-none"
            style={{ minWidth: '160px' }}
          >
            <span className="truncate mr-2">
              {categories.find(c => c.value === selectedCategory)?.label}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>

          {isCategoryOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-50 mt-1 w-full bg-background text-foreground border border-border rounded-md shadow-lg"
            >
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setIsCategoryOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:text-blue dark:hover:text-white ${
                    selectedCategory === category.value ? 'bg-blue-50 font-medium' : ''
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative flex-1 flex items-center border border-gray-300 rounded-r-lg overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="I am shopping for..."
            className="w-full h-full px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 text-gray-500 hover:text-blue-500"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchWithCategories;