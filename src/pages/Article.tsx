import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { getArticleBySlug } from '@/data/articles';
import { articleContents } from '@/data/articleContent';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  
  const article = slug ? getArticleBySlug(slug) : undefined;
  const content = slug ? articleContents[slug] : undefined;

  if (!article || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Article non trouvé' : 'Article not found'}
            </h1>
            <Link to="/" className="text-primary hover:underline">
              {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const processInlineFormatting = (line: string): JSX.Element => {
      const parts: (string | JSX.Element)[] = [];
      let remaining = line;
      let keyIndex = 0;

      // Process bold
      while (remaining.includes('**')) {
        const start = remaining.indexOf('**');
        const end = remaining.indexOf('**', start + 2);
        if (end === -1) break;
        
        if (start > 0) {
          parts.push(remaining.substring(0, start));
        }
        parts.push(<strong key={keyIndex++}>{remaining.substring(start + 2, end)}</strong>);
        remaining = remaining.substring(end + 2);
      }
      if (remaining) parts.push(remaining);

      // Process links
      const finalParts: (string | JSX.Element)[] = [];
      parts.forEach((part, i) => {
        if (typeof part === 'string') {
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          let lastIndex = 0;
          let match;
          while ((match = linkRegex.exec(part)) !== null) {
            if (match.index > lastIndex) {
              finalParts.push(part.substring(lastIndex, match.index));
            }
            finalParts.push(
              <a 
                key={`link-${i}-${keyIndex++}`}
                href={match[2]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {match[1]}
              </a>
            );
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < part.length) {
            finalParts.push(part.substring(lastIndex));
          }
        } else {
          finalParts.push(part);
        }
      });

      // Process inline code
      const codeProcessed: (string | JSX.Element)[] = [];
      finalParts.forEach((part, i) => {
        if (typeof part === 'string' && part.includes('`')) {
          const codeRegex = /`([^`]+)`/g;
          let lastIndex = 0;
          let match;
          while ((match = codeRegex.exec(part)) !== null) {
            if (match.index > lastIndex) {
              codeProcessed.push(part.substring(lastIndex, match.index));
            }
            codeProcessed.push(
              <code key={`code-${i}-${keyIndex++}`} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                {match[1]}
              </code>
            );
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < part.length) {
            codeProcessed.push(part.substring(lastIndex));
          }
        } else {
          codeProcessed.push(part);
        }
      });

      return <>{codeProcessed}</>;
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i}>{processInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0].split('|').filter(cell => cell.trim());
        const dataRows = tableRows.slice(2).map(row => 
          row.split('|').filter(cell => cell.trim())
        );
        
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  {headerRow.map((cell, i) => (
                    <th key={i} className="border border-border px-4 py-2 text-left font-semibold">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-border px-4 py-2">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Table detection
      if (trimmedLine.startsWith('|')) {
        flushList();
        inTable = true;
        tableRows.push(trimmedLine);
        return;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.substring(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-3">
            {trimmedLine.substring(4)}
          </h3>
        );
        return;
      }

      // Blockquote
      if (trimmedLine.startsWith('>')) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 rounded-r italic text-muted-foreground">
            {processInlineFormatting(trimmedLine.substring(1).trim())}
          </blockquote>
        );
        return;
      }

      // Warning/Note (⚠️)
      if (trimmedLine.includes('⚠️')) {
        flushList();
        elements.push(
          <div key={index} className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
            <p className="text-foreground">{processInlineFormatting(trimmedLine)}</p>
          </div>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\.\s/)) {
        inList = true;
        const listContent = trimmedLine.startsWith('- ') 
          ? trimmedLine.substring(2) 
          : trimmedLine.replace(/^\d+\.\s/, '');
        listItems.push(listContent);
        return;
      } else if (inList && trimmedLine === '') {
        flushList();
        return;
      } else if (inList) {
        flushList();
      }

      // Empty line
      if (trimmedLine === '') {
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
          {processInlineFormatting(trimmedLine)}
        </p>
      );
    });

    // Flush remaining
    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/#articles" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {content.title[language]}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} {t('articles.minRead')}
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderMarkdown(content.content[language])}
          </div>

          {/* References */}
          {content.references.length > 0 && (
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {language === 'fr' ? 'Références et Ressources' : 'References and Resources'}
              </h2>
              <ul className="space-y-3">
                {content.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
