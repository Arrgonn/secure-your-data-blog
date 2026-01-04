import { useLanguage } from '@/contexts/LanguageContext';
import ArticleCard from './ArticleCard';

const articles = [
  { index: 1, category: 'VPN', readTime: 5, date: '2026-01-02' },
  { index: 2, category: 'Security', readTime: 7, date: '2025-12-28' },
  { index: 3, category: 'Authentication', readTime: 4, date: '2025-12-25' },
  { index: 4, category: 'Privacy', readTime: 6, date: '2025-12-20' },
  { index: 5, category: 'Phishing', readTime: 5, date: '2025-12-15' },
  { index: 6, category: 'Legal', readTime: 8, date: '2025-12-10' },
];

const ArticlesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="articles" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('articles.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
