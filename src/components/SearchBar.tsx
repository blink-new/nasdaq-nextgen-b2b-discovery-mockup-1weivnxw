import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { mockData } from '../data/mockData';
import nasdaqKeywords from '../data/nasdaq_keywords.json';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  pageContext?: 'solutions' | 'market' | 'default';
  onNavigateToPage?: (page: string) => void;
}

interface KeywordResult {
  id: string;
  term: string;
  category: string;
  type: string;
  description: string;
}

export function SearchBar({ onSearch, query, setQuery, pageContext = 'default', onNavigateToPage }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'solutions' | 'market'>('solutions');
  const [filteredKeywords, setFilteredKeywords] = useState<KeywordResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Set default tab based on page context
  useEffect(() => {
    if (pageContext === 'market') {
      setActiveTab('market');
    } else {
      setActiveTab('solutions');
    }
  }, [pageContext]);

  // Filter keywords based on query
  useEffect(() => {
    if (query.trim()) {
      const filtered = nasdaqKeywords.keywords.filter(keyword =>
        keyword.term.toLowerCase().includes(query.toLowerCase()) ||
        keyword.category.toLowerCase().includes(query.toLowerCase()) ||
        keyword.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limit to 8 results
      setFilteredKeywords(filtered);
    } else {
      setFilteredKeywords([]);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
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

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  const handleKeywordClick = (keyword: KeywordResult) => {
    setQuery(keyword.term);
    setIsOpen(false);
    onSearch(keyword.term);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="Search for products, solutions, market data, or news..."
            className="w-full pl-11 pr-11 py-3 text-base border-2 border-gray-200 rounded-lg focus:border-[#0066CC] focus:outline-none transition-colors"
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

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
          {!query ? (
            // Default view when no query - show tabs with solution areas and market activity
            <>
              {/* Tab Headers - Active tab positioned on left */}
              <div className="flex border-b border-gray-100">
                {/* Active tab always appears first */}
                {activeTab === 'solutions' ? (
                  <>
                    <button
                      onClick={() => setActiveTab('solutions')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border-b border-gray-300 transition-colors"
                    >
                      <span className="mr-1 text-xs">🎯</span>
                      Solutions & Products
                    </button>
                    <button
                      onClick={() => setActiveTab('market')}
                      className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span className="mr-1 text-xs">📈</span>
                      Market Activity
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveTab('market')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border-b border-gray-300 transition-colors"
                    >
                      <span className="mr-1 text-xs">📈</span>
                      Market Activity
                    </button>
                    <button
                      onClick={() => setActiveTab('solutions')}
                      className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span className="mr-1 text-xs">🎯</span>
                      Solutions & Products
                    </button>
                  </>
                )}
              </div>

              {/* Tab Content */}
              <div className="p-3">
                {activeTab === 'solutions' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <h3 className="text-sm font-semibold text-[#0066CC] mb-2.5 border-b border-gray-100 pb-1.5">
                        Top Solution Areas
                      </h3>
                      <div className="space-y-1.5">
                        {mockData.productCategories.slice(0, 4).map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setIsOpen(false);
                              if (onNavigateToPage) {
                                // Navigate to the appropriate solution page
                                if (category.name === "Corporate Governance") {
                                  onNavigateToPage('corporate-governance');
                                } else if (category.name === "Market Surveillance") {
                                  onNavigateToPage('market-surveillance');
                                } else if (category.name === "ESG & Sustainability") {
                                  onNavigateToPage('esg-solutions');
                                } else if (category.name === "Market Analytics") {
                                  onNavigateToPage('market-analytics');
                                } else if (category.name === "Clearing & Settlement") {
                                  onNavigateToPage('clearing-settlement');
                                } else if (category.name === "Capital Markets") {
                                  onNavigateToPage('capital-markets');
                                } else {
                                  // Fallback to search if no specific page
                                  setQuery(category.name);
                                  onSearch(category.name);
                                }
                              } else {
                                // Fallback to search if onNavigateToPage is not provided
                                setQuery(category.name);
                                onSearch(category.name);
                              }
                            }}
                            className="block w-full text-left p-2 hover:bg-blue-50 rounded text-sm transition-colors group"
                          >
                            <div className="flex items-center">
                              <span className="text-base mr-2">{category.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-[#0066CC] text-sm">
                                  {category.name}
                                </div>
                                <div className="text-gray-600 text-xs mt-0.5">
                                  {category.description}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#0066CC] mb-2.5 border-b border-gray-100 pb-1.5">
                        Common Customer Questions
                      </h3>
                      <div className="space-y-1.5">
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
                            <div className="text-gray-900 group-hover:text-[#0066CC] flex items-center text-sm">
                              <span className="text-gray-400 mr-2 text-xs">•</span>
                              {search}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <h3 className="text-sm font-semibold text-[#00A651] mb-2.5 border-b border-gray-100 pb-1.5">
                        Recent News
                      </h3>
                      <div className="space-y-1.5">
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
                            <div className="font-medium text-gray-900 group-hover:text-[#00A651] leading-tight text-sm">
                              {news.title}
                            </div>
                            <div className="text-gray-500 text-xs mt-0.5 flex items-center">
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
                      <h3 className="text-sm font-semibold text-[#00A651] mb-2.5 border-b border-gray-100 pb-1.5">
                        Trending Tickers
                      </h3>
                      <div className="space-y-1.5">
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
                                <div className="font-medium text-gray-900 group-hover:text-[#00A651] text-sm">
                                  {ticker.symbol}
                                </div>
                                <div className="text-gray-600 text-xs">
                                  {ticker.name}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium text-gray-900 text-sm">
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
            </>
          ) : (
            // Auto-suggest view when there is a query - show filtered keywords
            <div className="p-3">
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Suggestions for "{query}"
                </h3>
              </div>
              {filteredKeywords.length > 0 ? (
                <div className="space-y-1">
                  {filteredKeywords.map((keyword) => (
                    <button
                      key={keyword.id}
                      onClick={() => handleKeywordClick(keyword)}
                      className="block w-full text-left p-3 hover:bg-gray-50 rounded-lg text-sm transition-colors group border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-[#0066CC] text-sm mb-1">
                            {highlightText(keyword.term, query)}
                          </div>
                          <div className="text-gray-600 text-xs mb-1">
                            {highlightText(keyword.description, query)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                              {keyword.category}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                              {keyword.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-sm">No suggestions found for "{query}"</div>
                  <div className="text-xs mt-1">Try searching for products, solutions, or market data</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}