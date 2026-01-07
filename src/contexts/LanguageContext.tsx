import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.articles': { en: 'Articles', fr: 'Articles' },
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  
  // Hero
  'hero.title': { en: 'Protect Your Digital Life', fr: 'Protégez Votre Vie Numérique' },
  'hero.subtitle': { en: 'Expert guides and tips to secure your personal data in an increasingly connected world', fr: 'Guides experts et conseils pour sécuriser vos données personnelles dans un monde de plus en plus connecté' },
  'hero.cta': { en: 'Start Reading', fr: 'Commencer à Lire' },
  
  // Articles
  'articles.title': { en: 'Latest Articles', fr: 'Derniers Articles' },
  'articles.readMore': { en: 'Read More', fr: 'Lire Plus' },
  'articles.minRead': { en: 'min read', fr: 'min de lecture' },
  
  // Article titles
  'article1.title': { en: 'VPN: How Does It Protect You?', fr: 'VPN : Comment Vous Protège-t-il ?' },
  'article1.excerpt': { en: 'Understand how VPNs work and why they matter for your online privacy.', fr: 'Comprenez le fonctionnement des VPN et pourquoi ils comptent pour votre vie privée.' },
  
  'article2.title': { en: 'Password Security: Why Encryption Matters', fr: 'Sécurité des Mots de Passe : Pourquoi le Chiffrement Compte' },
  'article2.excerpt': { en: 'Learn how password managers protect your credentials with encryption.', fr: 'Découvrez comment les gestionnaires protègent vos identifiants avec le chiffrement.' },
  
  'article3.title': { en: 'Two-Factor Authentication: Your Second Line of Defense', fr: 'Authentification à Deux Facteurs : Votre Seconde Ligne de Défense' },
  'article3.excerpt': { en: 'Understand how 2FA works and why it stops most hackers.', fr: 'Comprenez comment la 2FA fonctionne et pourquoi elle arrête la plupart des hackers.' },
  
  'article4.title': { en: 'Disk Encryption: Protecting Your Files with VeraCrypt', fr: 'Chiffrement de Disque : Protéger Vos Fichiers avec VeraCrypt' },
  'article4.excerpt': { en: 'Learn how full-disk encryption keeps your data safe if your device is stolen.', fr: 'Découvrez comment le chiffrement de disque protège vos données en cas de vol.' },
  
  'article5.title': { en: 'Phishing: How to Spot Fake Emails', fr: 'Phishing : Comment Repérer les Faux Emails' },
  'article5.excerpt': { en: 'Recognize and avoid phishing attempts before they compromise your data.', fr: 'Reconnaissez et évitez les tentatives de phishing avant qu\'elles ne compromettent vos données.' },
  
  'article6.title': { en: 'GDPR: Know Your Rights', fr: 'RGPD : Connaissez Vos Droits' },
  'article6.excerpt': { en: 'Understanding your data protection rights under European regulation.', fr: 'Comprendre vos droits en matière de protection des données selon le règlement européen.' },
  
  // Footer
  'footer.description': { en: 'Your trusted resource for data protection and online privacy.', fr: 'Votre ressource de confiance pour la protection des données et la vie privée en ligne.' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  'footer.quickLinks': { en: 'Quick Links', fr: 'Liens Rapides' },
  'footer.resources': { en: 'Resources', fr: 'Ressources' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  langPrefix: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Detect language from URL on initial load
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/fr')) {
      setLanguageState('fr');
    } else if (path.startsWith('/en')) {
      setLanguageState('en');
    } else {
      // Fallback to localStorage or default
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'en' || saved === 'fr')) {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update URL to reflect language
    const currentPath = window.location.pathname;
    let newPath: string;
    
    if (currentPath.startsWith('/en')) {
      newPath = currentPath.replace('/en', `/${lang}`);
    } else if (currentPath.startsWith('/fr')) {
      newPath = currentPath.replace('/fr', `/${lang}`);
    } else {
      newPath = `/${lang}${currentPath}`;
    }
    
    window.location.href = newPath;
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const langPrefix = `/${language}`;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, langPrefix }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
