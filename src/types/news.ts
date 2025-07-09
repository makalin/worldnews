export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  imageUrl: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
}