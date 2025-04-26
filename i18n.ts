// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('./public/locales/en.json')
      },
      ar: {
        translation: require('./public/locales/ar.json')
      },
      fr: {
        translation: require('./public/locales/fr.json')
      }
      // Add more languages as needed
    }
  });

export default i18n;