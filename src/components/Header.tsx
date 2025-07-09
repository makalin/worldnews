import React, { useState, useEffect } from 'react';
import { Terminal, Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-black border-b-2 border-green-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Terminal className="h-6 w-6 text-green-400" />
            <span className="text-green-400 text-xl font-bold">WORLDNEWS.TERMINAL</span>
          </div>
          <div className="text-green-400 text-sm">
            {currentTime.toLocaleString()}
          </div>
        </div>

        {/* Command Line Interface */}
        <div className="bg-gray-900 border border-green-500 rounded p-4">
          <div className="text-green-400 mb-2">
            <span className="text-green-300">user@worldnews:~$</span> news --global --live
          </div>
          
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <span className="text-green-300">search:</span>
            <input
              type="text"
              placeholder="enter search query..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 placeholder-green-600 flex-1 font-mono"
            />
            <button type="submit" className="text-green-400 hover:text-green-300">
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* ASCII Art Banner */}
        <div className="text-green-400 text-xs mt-4 overflow-x-auto">
          <pre>{`
 ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗     ███╗   ██╗███████╗██╗    ██╗███████╗
 ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗    ████╗  ██║██╔════╝██║    ██║██╔════╝
 ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║    ██╔██╗ ██║█████╗  ██║ █╗ ██║███████╗
 ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║    ██║╚██╗██║██╔══╝  ██║███╗██║╚════██║
 ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝    ██║ ╚████║███████╗╚███╔███╔╝███████║
  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝     ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝ ╚══════╝
          `}</pre>
        </div>
      </div>
    </header>
  );
};

export default Header;