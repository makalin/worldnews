import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryTabs from './components/CategoryTabs';
import NewsCard from './components/NewsCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { newsArticles, categories, trendingTopics } from './data/mockNews';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = newsArticles.find(article => article.isFeatured) || newsArticles[0];

  const filteredArticles = useMemo(() => {
    let filtered = newsArticles.filter(article => !article.isFeatured);

    if (activeCategory !== 'all') {
      filtered = filtered.filter(article => article.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory('all');
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <Header onSearch={handleSearch} />
      
      <HeroSection article={featuredArticle} />
      
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 py-8 font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {searchQuery && (
              <div className="mb-6 bg-gray-900 border border-green-500 p-4">
                <div className="text-green-300 text-xs mb-2">
                  &gt; grep -r "{searchQuery}" /news/articles/
                </div>
                <div className="text-green-400 font-bold">
                  SEARCH RESULTS: "{searchQuery}"
                </div>
                <div className="text-green-200 text-sm">
                  Found {filteredArticles.length} matching articles
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12 bg-gray-900 border border-green-500">
                <div className="text-green-300 text-sm mb-2">
                  &gt; ls /news/{activeCategory !== 'all' ? activeCategory : 'search_results'}/
                </div>
                <div className="text-green-200">
                  {searchQuery ? 'No files found matching search criteria.' : 'Directory is empty.'}
                </div>
                <div className="text-green-400 text-xs mt-2">
                  Exit code: 0
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              trendingTopics={trendingTopics}
              latestArticles={newsArticles.slice().reverse()}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;