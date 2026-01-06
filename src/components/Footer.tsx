import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = ['home', 'articles', 'about', 'contact'];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                how<span className="text-primary">protect</span>mydata
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(`nav.${link}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t('footer.resources')}
            </h3>
            <nav className="space-y-3">
              <a href="https://privacyguides.org" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Guides
              </a>
              <a href="https://ssd.eff.org" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                EFF Surveillance Self-Defense
              </a>
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                CNIL
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} howprotectmydata. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
