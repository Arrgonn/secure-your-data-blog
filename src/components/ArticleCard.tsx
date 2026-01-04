import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  index: number;
  category: string;
  readTime: number;
  date: string;
}

const categoryColors: Record<string, string> = {
  'VPN': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Security': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Authentication': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'Privacy': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Phishing': 'bg-red-500/10 text-red-500 border-red-500/20',
  'Legal': 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
};

const ArticleCard = ({ index, category, readTime, date }: ArticleCardProps) => {
  const { t } = useLanguage();
  
  return (
    <article className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-card">
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[category] || 'bg-primary/10 text-primary border-primary/20'}`}>
          {category}
        </span>
      </div>

      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary">{index}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime} {t('articles.minRead')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {t(`article${index}.title`)}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {t(`article${index}.excerpt`)}
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-semibold group/link"
        >
          {t('articles.readMore')}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;
