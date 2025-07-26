import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { mockData } from '../data/mockData';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  pageContext?: 'solutions' | 'market' | 'default';
}

export function SearchBar({ onSearch, query, setQuery, pageContext = 'default' }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'solutions' | 'market'>('solutions');
  const searchRef = useRef<HTMLDivElement>(null);

  // Set default tab based on page context
  useEffect(() => {
    if (pageContext === 'market') {
      setActiveTab('market');
    } else {
      setActiveTab('solutions');
    }
  }, [pageContext]);

  const handleInputFocus = () => {
    if (!query) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Search for products, solutions, market data, or news..."
            className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#0066CC] focus:outline-none transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>

      {isOpen && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('solutions')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'solutions'
                  ? 'text-[#0066CC] border-b-2 border-[#0066CC] bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">🎯</span>
              Solutions & Products
            </button>
            <button
              onClick={() => setActiveTab('market')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'market'
                  ? 'text-[#00A651] border-b-2 border-[#00A651] bg-green-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">📈</span>
              Market Activity
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === 'solutions' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#0066CC] mb-3 border-b border-gray-100 pb-2">
                    Top Solution Areas
                  </h3>
                  <div className="space-y-2">
                    {mockData.productCategories.slice(0, 4).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setQuery(category.name);
                          setIsOpen(false);
                          onSearch(category.name);
                        }}
                        className="block w-full text-left p-2 hover:bg-blue-50 rounded text-sm transition-colors group"
                      >
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{category.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-[#0066CC]">
                              {category.name}
                            </div>
                            <div className="text-gray-600 text-xs mt-1">
                              {category.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#0066CC] mb-3 border-b border-gray-100 pb-2">
                    Common Customer Questions
                  </h3>
                  <div className="space-y-2">
                    {mockData.popularSearches.slice(0, 6).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(search);
                          setIsOpen(false);
                          onSearch(search);
                        }}
                        className="block w-full text-left p-2 hover:bg-blue-50 rounded text-sm transition-colors group"
                      >
                        <div className="text-gray-900 group-hover:text-[#0066CC] flex items-center">
                          <span className="text-gray-400 mr-2 text-xs">•</span>
                          {search}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#00A651] mb-3 border-b border-gray-100 pb-2">
                    Recent News
                  </h3>
                  <div className="space-y-2">
                    {mockData.marketActivity.recentNews.slice(0, 4).map((news) => (
                      <button
                        key={news.id}
                        onClick={() => {
                          setQuery(news.title);
                          setIsOpen(false);
                          onSearch(news.title);
                        }}
                        className="block w-full text-left p-2 hover:bg-green-50 rounded text-sm transition-colors group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-[#00A651] leading-tight">
                          {news.title}
                        </div>
                        <div className="text-gray-500 text-xs mt-1 flex items-center">
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs mr-2">
                            {news.category}
                          </span>
                          {news.timestamp}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#00A651] mb-3 border-b border-gray-100 pb-2">
                    Trending Tickers
                  </h3>
                  <div className="space-y-2">
                    {mockData.marketActivity.trendingTickers.slice(0, 6).map((ticker) => (
                      <button
                        key={ticker.symbol}
                        onClick={() => {
                          setQuery(ticker.symbol);
                          setIsOpen(false);
                          onSearch(ticker.symbol);
                        }}
                        className="block w-full text-left p-2 hover:bg-green-50 rounded text-sm transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-[#00A651]">
                              {ticker.symbol}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {ticker.name}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">
                              ${ticker.price}
                            </div>
                            <div className={`text-xs ${
                              ticker.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {ticker.change}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
