export interface Article {
  id: number;
  slug: string;
  category: string;
  readTime: number;
  date: string;
}

export const articles: Article[] = [
  { id: 1, slug: 'vpn-how-it-works', category: 'VPN', readTime: 8, date: '2026-01-02' },
  { id: 2, slug: 'password-security-encryption', category: 'Security', readTime: 10, date: '2025-12-28' },
  { id: 3, slug: 'two-factor-authentication', category: 'Authentication', readTime: 6, date: '2025-12-25' },
  { id: 4, slug: 'disk-encryption-veracrypt', category: 'Encryption', readTime: 8, date: '2025-12-20' },
  { id: 5, slug: 'phishing-spot-fake-emails', category: 'Phishing', readTime: 6, date: '2025-12-15' },
  { id: 6, slug: 'gdpr-know-your-rights', category: 'Legal', readTime: 9, date: '2025-12-10' },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(a => a.slug === slug);
};

export const getArticleById = (id: number): Article | undefined => {
  return articles.find(a => a.id === id);
};
