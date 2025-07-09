import React from 'react';
import { Clock, User, Hash } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <article className="bg-gray-900 border border-green-500 p-4 font-mono hover:border-green-400 transition-colors group">
      {/* File Header */}
      <div className="text-green-300 text-xs mb-2">
        &gt; cat article_{article.id}.txt
      </div>
      
      {/* Category Badge */}
      <div className="text-green-400 text-xs mb-2">
        [{article.category.toUpperCase()}]
      </div>
      
      {/* Title */}
      <h3 className="text-green-400 font-bold mb-3 leading-tight group-hover:text-green-300 transition-colors">
        {article.title}
      </h3>
      
      {/* Excerpt */}
      <div className="text-green-300 text-xs mb-2">
        &gt; head -n 3 content.txt
      </div>
      <p className="text-green-200 text-sm mb-4 leading-relaxed">
        {article.excerpt}
      </p>
      
      {/* Metadata */}
      <div className="space-y-1 text-xs text-green-300 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>AUTHOR: {article.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>DATE: {formatDate(article.publishedAt)}</span>
          </div>
        </div>
        <div>READ_TIME: {article.readTime}min</div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {article.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 text-xs bg-gray-800 text-green-400 border border-green-600"
          >
            <Hash className="h-2 w-2 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      
      {/* Command Line */}
      <div className="text-green-300 text-xs">
        <span>$</span> <button className="text-green-400 hover:text-green-300 transition-colors">read --full</button>
      </div>
    </article>
  );
};

export default NewsCard;