import React from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Calendar, Clock, Globe, DollarSign, BarChart3, Activity } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { ConversationalAdvisor } from './ConversationalAdvisor';
import { Header } from './Header';

interface MarketPageProps {
  onBack: () => void;
  onOpenAdvisor: () => void;
  onNavigateToPage?: (page: string) => void;
}

// Stock Symbol Page (AAPL)
export const StockSymbolPage: React.FC<MarketPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="market" onSearch={() => {}} query="" setQuery={() => {}} onNavigateToPage={onNavigateToPage} />
          
          {/* Assistant Icon */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenAdvisor}
              className="group flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#0066CC] transition-all duration-200"
            >
              <div className="w-7 h-7 bg-gradient-to-r from-[#0066CC] to-[#00A651] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">🤖</span>
              </div>
              <span className="text-gray-700 group-hover:text-[#0066CC] font-medium text-sm">
                Ask our AI Assistant
              </span>
              <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Stock Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Apple Inc.</h1>
              <p className="text-lg text-gray-600">AAPL • NASDAQ</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">$175.43</div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-5 w-5 mr-1" />
                <span className="text-lg font-semibold">+2.15 (+1.24%)</span>
              </div>
              <p className="text-sm text-gray-500">As of 4:00 PM ET</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Price Chart</h2>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive price chart would be displayed here</p>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Market Cap</p>
                  <p className="text-lg font-semibold text-gray-900">$2.75T</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">P/E Ratio</p>
                  <p className="text-lg font-semibold text-gray-900">28.45</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">52W High</p>
                  <p className="text-lg font-semibold text-gray-900">$199.62</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">52W Low</p>
                  <p className="text-lg font-semibold text-gray-900">$164.08</p>
                </div>
              </div>
            </div>

            {/* Recent News */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent News</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-medium text-gray-900">Apple Reports Strong Q4 Earnings</h3>
                  <p className="text-sm text-gray-600 mt-1">Revenue beats expectations driven by iPhone and services growth</p>
                  <p className="text-xs text-gray-500 mt-2">2 hours ago • Reuters</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-medium text-gray-900">New iPhone Launch Drives Pre-Orders</h3>
                  <p className="text-sm text-gray-600 mt-1">Latest iPhone model sees record pre-order numbers in first week</p>
                  <p className="text-xs text-gray-500 mt-2">1 day ago • TechCrunch</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-medium text-gray-900">Apple Expands Services Portfolio</h3>
                  <p className="text-sm text-gray-600 mt-1">Company announces new subscription services and partnerships</p>
                  <p className="text-xs text-gray-500 mt-2">3 days ago • Bloomberg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Data</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume</span>
                  <span className="font-medium">45.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Volume</span>
                  <span className="font-medium">52.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beta</span>
                  <span className="font-medium">1.24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dividend Yield</span>
                  <span className="font-medium">0.52%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Stocks</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">MSFT</p>
                    <p className="text-sm text-gray-600">Microsoft</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$378.85</p>
                    <p className="text-sm text-green-600">+0.85%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">GOOGL</p>
                    <p className="text-sm text-gray-600">Alphabet</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$142.56</p>
                    <p className="text-sm text-red-600">-0.42%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">AMZN</p>
                    <p className="text-sm text-gray-600">Amazon</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$156.78</p>
                    <p className="text-sm text-green-600">+1.23%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">Get insights and analysis from our market experts.</p>
              <button
                onClick={onOpenAdvisor}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ask our AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market News Page
export const MarketNewsPage: React.FC<MarketPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="market" onSearch={() => {}} query="" setQuery={() => {}} onNavigateToPage={onNavigateToPage} />
          
          {/* Assistant Icon */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenAdvisor}
              className="group flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#0066CC] transition-all duration-200"
            >
              <div className="w-7 h-7 bg-gradient-to-r from-[#0066CC] to-[#00A651] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">🤖</span>
              </div>
              <span className="text-gray-700 group-hover:text-[#0066CC] font-medium text-sm">
                Ask our AI Assistant
              </span>
              <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Market News</h1>
          </div>
          <p className="text-lg text-gray-600 mt-2">Latest market updates and financial news</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Breaking News */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Breaking News</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4 bg-red-50 p-4 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full mr-2">BREAKING</span>
                    <span className="text-sm text-gray-600">15 minutes ago</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Federal Reserve Announces Interest Rate Decision</h3>
                  <p className="text-gray-700">The Federal Reserve has announced a 0.25% rate cut, citing economic uncertainty and inflation concerns. Markets are responding positively to the news.</p>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest News</h2>
              <div className="space-y-6">
                <article className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">TECH</span>
                    <span className="text-sm text-gray-600">2 hours ago • Reuters</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Stocks Rally on AI Optimism</h3>
                  <p className="text-gray-700 mb-3">Major technology companies see significant gains as investors show renewed confidence in artificial intelligence investments and future growth prospects.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span>NASDAQ +2.1%</span>
                  </div>
                </article>

                <article className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">ENERGY</span>
                    <span className="text-sm text-gray-600">4 hours ago • Bloomberg</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Oil Prices Surge on Supply Concerns</h3>
                  <p className="text-gray-700 mb-3">Crude oil futures jump 3.5% amid geopolitical tensions and supply chain disruptions affecting global energy markets.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span>WTI Crude +3.5%</span>
                  </div>
                </article>

                <article className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2">CRYPTO</span>
                    <span className="text-sm text-gray-600">6 hours ago • CoinDesk</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bitcoin Reaches New Monthly High</h3>
                  <p className="text-gray-700 mb-3">Bitcoin surpasses $45,000 mark for the first time this month, driven by institutional adoption and regulatory clarity in major markets.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span>BTC +5.2%</span>
                  </div>
                </article>

                <article>
                  <div className="flex items-center mb-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mr-2">EARNINGS</span>
                    <span className="text-sm text-gray-600">8 hours ago • MarketWatch</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Q4 Earnings Season Shows Mixed Results</h3>
                  <p className="text-gray-700 mb-3">Corporate earnings reports show varied performance across sectors, with technology and healthcare leading while retail faces headwinds.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="h-4 w-4 mr-1 text-blue-600" />
                    <span>S&P 500 earnings growth: +2.3%</span>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Movers</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">NVDA</p>
                    <p className="text-sm text-gray-600">NVIDIA Corp</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$875.28</p>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">+8.5%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">TSLA</p>
                    <p className="text-sm text-gray-600">Tesla Inc</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$248.42</p>
                    <div className="flex items-center text-red-600">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">-4.2%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">META</p>
                    <p className="text-sm text-gray-600">Meta Platforms</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$486.91</p>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">+3.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Economic Calendar</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Fed Meeting</p>
                    <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Jobs Report</p>
                    <p className="text-sm text-gray-600">Friday, 8:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">GDP Data</p>
                    <p className="text-sm text-gray-600">Next Week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-4">Get expert insights and analysis on current market trends.</p>
              <button
                onClick={onOpenAdvisor}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Talk to our AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Indices Page
export const MarketIndicesPage: React.FC<MarketPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="market" onSearch={() => {}} query="" setQuery={() => {}} onNavigateToPage={onNavigateToPage} />
          
          {/* Assistant Icon */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenAdvisor}
              className="group flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#0066CC] transition-all duration-200"
            >
              <div className="w-7 h-7 bg-gradient-to-r from-[#0066CC] to-[#00A651] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-sm">🤖</span>
              </div>
              <span className="text-gray-700 group-hover:text-[#0066CC] font-medium text-sm">
                Ask our AI Assistant
              </span>
              <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Market Indices</h1>
          </div>
          <p className="text-lg text-gray-600 mt-2">Track major market indices and their performance</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Major Indices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Major US Indices</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">NASDAQ Composite</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">12,534.10</div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-medium">+98.45 (+0.8%)</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">S&P 500</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">4,789.35</div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-medium">+15.22 (+0.3%)</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dow Jones</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">37,863.80</div>
                  <div className="flex items-center text-red-600">
                    <TrendingDown className="h-5 w-5 mr-1" />
                    <span className="font-medium">-45.67 (-0.1%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* International Indices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">International Indices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">OMX Stockholm 30</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">2,456.78</div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-medium">+12.34 (+0.5%)</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">OMX Copenhagen 25</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1,910.22</div>
                  <div className="flex items-center text-red-600">
                    <TrendingDown className="h-5 w-5 mr-1" />
                    <span className="font-medium">-5.78 (-0.3%)</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">OMX Helsinki 25</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">4,823.45</div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-medium">+28.91 (+0.6%)</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">OMX Iceland 8</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">2,187.63</div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-medium">+8.45 (+0.4%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Index Performance</h2>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive performance chart would be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Advancing</span>
                  <span className="font-medium text-green-600">1,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Declining</span>
                  <span className="font-medium text-red-600">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Unchanged</span>
                  <span className="font-medium text-gray-600">456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Highs</span>
                  <span className="font-medium text-green-600">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Lows</span>
                  <span className="font-medium text-red-600">23</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Technology</span>
                  <span className="font-medium text-green-600">+2.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Healthcare</span>
                  <span className="font-medium text-green-600">+1.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Financials</span>
                  <span className="font-medium text-green-600">+0.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy</span>
                  <span className="font-medium text-red-600">-0.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Utilities</span>
                  <span className="font-medium text-red-600">-1.2%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
              <p className="text-gray-600 mb-4">Get detailed analysis and insights on market indices performance.</p>
              <button
                onClick={onOpenAdvisor}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Talk to our AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};