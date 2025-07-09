import React, { useState, useEffect } from 'react';
import { Activity, Clock, Wifi } from 'lucide-react';
import { NewsArticle } from '../types/news';

interface SidebarProps {
  trendingTopics: string[];
  latestArticles: NewsArticle[];
}

const Sidebar: React.FC<SidebarProps> = ({ trendingTopics, latestArticles }) => {
  const [systemStatus, setSystemStatus] = useState('ONLINE');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <aside className="space-y-6 font-mono">
      {/* System Status */}
      <div className="bg-gray-900 border border-green-500 p-4">
        <div className="text-green-300 text-xs mb-2">
          &gt; system --status
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <Wifi className="h-3 w-3 text-green-400" />
            <span className="text-green-400">STATUS: {systemStatus}</span>
          </div>
          <div>UPTIME: {formatUptime(uptime)}</div>
          <div>LOAD: 0.42 0.38 0.35</div>
          <div>MEM: 2.1GB/8GB</div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-gray-900 border border-green-500 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Activity className="h-4 w-4 text-green-400" />
          <span className="text-green-400 font-bold">TRENDING_TOPICS.log</span>
        </div>
        <div className="text-green-300 text-xs mb-2">
          &gt; tail -f trending.log
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="block w-full text-left text-sm text-green-200 hover:text-green-400 hover:bg-gray-800 p-2 transition-colors"
            >
              [{(index + 1).toString().padStart(2, '0')}] {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="bg-gray-900 border border-green-500 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Clock className="h-4 w-4 text-green-400" />
          <span className="text-green-400 font-bold">RECENT_FILES.txt</span>
        </div>
        <div className="text-green-300 text-xs mb-2">
          &gt; ls -lt /news/latest/
        </div>
        <div className="space-y-3">
          {latestArticles.slice(0, 5).map((article, index) => (
            <div key={article.id} className="text-xs">
              <div className="text-green-400 mb-1">
                article_{(index + 1).toString().padStart(3, '0')}.txt
              </div>
              <div className="text-green-200 leading-tight mb-1">
                {article.title.substring(0, 60)}...
              </div>
              <div className="text-green-300">
                {formatDate(article.publishedAt)} | {article.readTime}min
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Terminal */}
      <div className="bg-gray-900 border border-green-500 p-4">
        <div className="text-green-400 font-bold mb-3">SUBSCRIBE.sh</div>
        <div className="text-green-300 text-xs mb-2">
          &gt; ./newsletter_signup.sh
        </div>
        <div className="text-green-200 text-xs mb-3">
          Enter email for daily news feed:
        </div>
        <form className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-300">$</span>
            <input
              type="email"
              placeholder="user@domain.com"
              className="bg-transparent border-b border-green-500 text-green-400 text-xs outline-none flex-1 font-mono"
            />
          </div>
          <button
            type="submit"
            className="text-green-400 hover:text-green-300 text-xs transition-colors"
          >
            [EXECUTE]
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;