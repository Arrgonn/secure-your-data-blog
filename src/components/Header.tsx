import { Moon, Sun, Globe, Shield, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, langPrefix } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/en' || location.pathname === '/fr' || location.pathname === '/';

  const getNavHref = (link: string) => {
    if (link === 'home') {
      return langPrefix;
    }
    // For articles, about, contact - navigate to home page with anchor
    if (isHomePage) {
      return `#${link}`;
    }
    return `${langPrefix}#${link}`;
  };

  const navLinks = ['home', 'articles', 'about', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={langPrefix} className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">
              how<span className="text-primary">protect</span>mydata
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const href = getNavHref(link);
              // Use Link for full navigation, anchor for same-page scroll
              if (href.startsWith('#')) {
                return (
                  <a
                    key={link}
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {t(`nav.${link}`)}
                  </a>
                );
              }
              return (
                <Link
                  key={link}
                  to={href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t(`nav.${link}`)}
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground uppercase">
                {language}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => {
              const href = getNavHref(link);
              if (href.startsWith('#')) {
                return (
                  <a
                    key={link}
                    href={href}
                    className="block py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`nav.${link}`)}
                  </a>
                );
              }
              return (
                <Link
                  key={link}
                  to={href}
                  className="block py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(`nav.${link}`)}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
