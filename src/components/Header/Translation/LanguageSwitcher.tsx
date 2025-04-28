'use client'

import { useTranslation } from 'react-i18next';
import { ChevronDown, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const LanguageSwitcher = () => {
  const { t,i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);


  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'ar', name: t('language.ar') }, // Arabic
    { code: 'fr', name: t('language.fr') }, // French
    // Add more languages as needed
  ];
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    setIsOpen(false);
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng);
    } else {
      console.error('i18n instance not available or changeLanguage not a function');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={languageRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg bg-background hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Small gray text above icon */}
        <span className="text-[8px] text-gray-500 dark:text-gray-400 uppercase">
          {currentLanguage.code}
        </span>
        
        {/* Large icon */}
        <Languages className="w-5 h-5 text-foreground" />
        
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 border border-border rounded-md shadow-lg bg-background text-foreground z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  i18n.language === language.code
                    ? 'bg-blue-50 dark:bg-gray-800 font-medium'
                    : 'text-foreground'
                }`}
              >
                <span className="flex-1">{language.name}</span>
                {i18n.language === language.code && (
                  <span className={`text-blue-500 dark:text-blue-400 ${language.code != 'ar' ? 'rtl' : 'ltr'}`}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};