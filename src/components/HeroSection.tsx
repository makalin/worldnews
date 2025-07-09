import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, User } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface HeroSectionProps {
  article: NewsArticle;
}

const HeroSection: React.FC<HeroSectionProps> = ({ article }) => {
  const [blinkingText, setBlinkingText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingText(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <section className="bg-black text-green-400 font-mono border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breaking News Alert */}
        <div className="bg-red-900 border border-red-500 p-4 mb-6 rounded">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">
              [BREAKING NEWS]{blinkingText ? ' █' : '  '}
            </span>
          </div>
          <div className="text-red-300">
            PRIORITY: HIGH | STATUS: LIVE | CLASSIFICATION: PUBLIC
          </div>
        </div>

        {/* Main Story Display */}
        <div className="bg-gray-900 border border-green-500 p-6 rounded">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Story Content */}
            <div className="lg:col-span-2">
              <div className="text-green-300 text-sm mb-2">
                &gt; HEADLINE_PRIORITY_1.txt
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <div className="text-green-300 mb-4">
                &gt; cat story_excerpt.txt
              </div>
              <p className="text-green-200 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              {/* Metadata */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>AUTHOR: {article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>TIMESTAMP: {formatDate(article.publishedAt)}</span>
                  </div>
                </div>
                <div>READ_TIME: {article.readTime} minutes</div>
                <div>CATEGORY: {article.category.toUpperCase()}</div>
                <div>TAGS: [{article.tags.join(', ')}]</div>
              </div>
            </div>

            {/* ASCII Art Image Placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 border border-green-500 p-4 rounded">
                <div className="text-green-300 text-xs mb-2">
                  &gt; display image.ascii
                </div>
                <div className="text-green-400 text-xs leading-none">
                  <pre>{`
    ████████████████████
    ██              ██
    ██  ████  ████  ██
    ██  ████  ████  ██
    ██              ██
    ██  ████████    ██
    ██  ████████    ██
    ██              ██
    ████████████████████
    [IMAGE_PLACEHOLDER]
                  `}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Command Prompt */}
        <div className="mt-4 text-green-300">
          <span>user@worldnews:~$</span> <span className="text-green-400">read --more --details</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;