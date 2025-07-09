import React from 'react';
import { Terminal, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-green-400 font-mono border-t-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Terminal Footer Header */}
        <div className="text-green-300 text-xs mb-4">
          &gt; cat /etc/worldnews/footer.conf
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold">WORLDNEWS.TERMINAL</span>
            </div>
            <div className="text-green-200 text-sm mb-4">
              <pre>{`
# Global news aggregation system
# Version: 2.1.4
# Status: Production
# Uptime: 99.9%
              `}</pre>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="text-green-400 font-bold mb-3">DIRECTORIES/</div>
            <div className="space-y-1 text-sm">
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./world/</a></div>
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./politics/</a></div>
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./business/</a></div>
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./technology/</a></div>
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./health/</a></div>
              <div><a href="#" className="text-green-200 hover:text-green-400 transition-colors">./climate/</a></div>
            </div>
          </div>

          {/* System Info */}
          <div>
            <div className="text-green-400 font-bold mb-3">SYSTEM_INFO</div>
            <div className="text-sm space-y-1">
              <div className="text-green-200">OS: NewsLinux 3.14.159</div>
              <div className="text-green-200">Shell: /bin/newsh</div>
              <div className="text-green-200">Kernel: 5.15.0-news</div>
              <div className="text-green-200">Arch: x86_64</div>
              <div className="text-green-200">Locale: en_US.UTF-8</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="text-green-300 mb-2 md:mb-0">
              user@worldnews:~$ whoami && date
            </div>
            <div className="text-green-200">
              © 2024 WorldNews Terminal. All rights reserved. | Licensed under MIT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;