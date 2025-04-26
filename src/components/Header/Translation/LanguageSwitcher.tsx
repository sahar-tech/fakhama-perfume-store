'use client'

import { useTranslation } from 'react-i18next';
import { ChevronDown, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }, // Arabic
    { code: 'fr', name: 'Français' }, // French
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
        className="flex items-center gap-2 border-border py-2 rounded-lg bg-background text-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}>
          
        <Languages className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-3 mt-1 w-25 border-border border rounded-md shadow-lg bg-background text-foreground z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 dark:hover:text-white hover:text-blue ${
                  i18n.language === language.code
                    ? 'bg-background dark:bg-background text-foreground'
                    : 'text-foreground dark:text-foreground hover:bg-background'
                }`}
                dir={language.code === 'ar' ? 'rtl' : 'ltr'}
              >
                <span className="flex-1">{language.name}</span>
                {i18n.language === language.code && (
                  <span className="text-foreground">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};