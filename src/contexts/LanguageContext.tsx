import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  'article1.title': { en: 'VPN: Your First Line of Defense', fr: 'VPN : Votre Première Ligne de Défense' },
  'article1.excerpt': { en: 'Learn how VPNs encrypt your connection and why they\'re essential for privacy.', fr: 'Découvrez comment les VPN chiffrent votre connexion et pourquoi ils sont essentiels.' },
  
  'article2.title': { en: 'Password Managers: A Complete Guide', fr: 'Gestionnaires de Mots de Passe : Guide Complet' },
  'article2.excerpt': { en: 'Stop using the same password everywhere. Here\'s how to manage them securely.', fr: 'Arrêtez d\'utiliser le même mot de passe partout. Voici comment les gérer en sécurité.' },
  
  'article3.title': { en: 'Two-Factor Authentication Explained', fr: 'L\'Authentification à Deux Facteurs Expliquée' },
  'article3.excerpt': { en: 'Add an extra layer of security to all your accounts with 2FA.', fr: 'Ajoutez une couche de sécurité supplémentaire à tous vos comptes avec la 2FA.' },
  
  'article4.title': { en: 'Social Media Privacy Settings', fr: 'Paramètres de Confidentialité Réseaux Sociaux' },
  'article4.excerpt': { en: 'Take control of what you share online with these essential settings.', fr: 'Prenez le contrôle de ce que vous partagez en ligne avec ces paramètres essentiels.' },
  
  'article5.title': { en: 'Phishing: How to Spot Fake Emails', fr: 'Phishing : Comment Repérer les Faux Emails' },
  'article5.excerpt': { en: 'Recognize and avoid phishing attempts before they compromise your data.', fr: 'Reconnaissez et évitez les tentatives de phishing avant qu\'elles ne compromettent vos données.' },
  
  'article6.title': { en: 'GDPR: Know Your Rights', fr: 'RGPD : Connaissez Vos Droits' },
  'article6.excerpt': { en: 'Understanding your data protection rights under European regulation.', fr: 'Comprendre vos droits en matière de protection des données selon le règlement européen.' },
  
  // Footer
  'footer.description': { en: 'Your trusted resource for data protection and online privacy.', fr: 'Votre ressource de confiance pour la protection des données et la vie privée en ligne.' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  'footer.quickLinks': { en: 'Quick Links', fr: 'Liens Rapides' },
  'footer.newsletter': { en: 'Newsletter', fr: 'Newsletter' },
  'footer.subscribe': { en: 'Subscribe', fr: "S'abonner" },
  'footer.emailPlaceholder': { en: 'Enter your email', fr: 'Entrez votre email' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'fr';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
