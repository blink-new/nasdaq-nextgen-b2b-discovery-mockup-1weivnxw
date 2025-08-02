import { SearchBar } from './SearchBar';
import { Header } from './Header';
import { MessageCircle, Building2, Shield, TrendingUp, Users, FileText, BarChart3 } from 'lucide-react';

interface HomePageProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  onOpenAdvisor: () => void;
  onNavigateToPage: (page: string) => void;
}

export function HomePage({ onSearch, query, setQuery, onOpenAdvisor, onNavigateToPage }: HomePageProps) {
  const solutionAreas = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive surveillance and compliance solutions to detect market abuse and ensure regulatory adherence.",
      color: "bg-red-600"
    },
    {
      icon: Building2,
      title: "Corporate Governance",
      description: "Board management and director collaboration tools for secure, efficient governance processes.",
      color: "bg-[#0066CC]"
    },
    {
      icon: TrendingUp,
      title: "ESG & Sustainability",
      description: "Complete ESG data portal with metrics, scores, and reporting tools for sustainable business practices.",
      color: "bg-[#00A651]"
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Real-time market data, analytics, and insights to power informed trading and investment decisions.",
      color: "bg-purple-600"
    },
    {
      icon: Users,
      title: "Capital Markets",
      description: "End-to-end solutions for listing, trading, clearing, and settlement across global markets.",
      color: "bg-orange-600"
    },
    {
      icon: FileText,
      title: "Regulatory Technology",
      description: "Advanced RegTech solutions for compliance monitoring, reporting, and regulatory risk management.",
      color: "bg-indigo-600"
    }
  ];

  const customerQuestions = [
    "How to list on Nasdaq",
    "ESG reporting requirements",
    "Market surveillance best practices",
    "Board meeting compliance",
    "Regulatory filing automation",
    "Real-time risk monitoring",
    "Corporate governance standards",
    "Sustainable finance metrics",
    "Trading technology solutions",
    "Compliance cost reduction"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-16 pb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-5">
            Discover Nasdaq's
            <span className="text-[#0066CC]"> Next-Gen Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Find the perfect technology solutions to power your business. 
            Search through our comprehensive suite of products, resources, and expertise.
          </p>
          
          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar onSearch={onSearch} query={query} setQuery={setQuery} pageContext="solutions" onNavigateToPage={onNavigateToPage} />
          </div>

          {/* Assistant Icon */}
          <div className="mb-12 flex justify-center">
            <button
              onClick={onOpenAdvisor}
              className="group flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#0066CC] transition-all duration-200"
            >
              <div className="w-7 h-7 bg-gradient-to-r from-[#0066CC] to-[#00A651] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-gray-700 group-hover:text-[#0066CC] font-medium text-sm">
                Ask our AI Assistant
              </span>
              <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Top Solution Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Top Solution Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0066CC] transition-all duration-200 cursor-pointer group"
                  onClick={() => {
                    if (area.title === "Corporate Governance") {
                      onNavigateToPage('corporate-governance');
                    } else if (area.title === "Risk Management") {
                      onNavigateToPage('market-surveillance');
                    } else if (area.title === "ESG & Sustainability") {
                      onNavigateToPage('esg-solutions');
                    } else if (area.title === "Market Analytics") {
                      onNavigateToPage('market-analytics');
                    } else if (area.title === "Capital Markets") {
                      onNavigateToPage('capital-markets');
                    } else if (area.title === "Regulatory Technology") {
                      onNavigateToPage('clearing-settlement');
                    } else {
                      setQuery(area.title);
                      onSearch(area.title);
                    }
                  }}
                >
                  <div className={`w-10 h-10 ${area.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0066CC] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Common Customer Questions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Common Customer Questions</h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Get instant answers to the most frequently asked questions from Nasdaq customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {customerQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(question);
                  onSearch(question);
                }}
                className="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-[#0066CC] hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full group-hover:bg-[#00A651] transition-colors"></div>
                  <span className="text-gray-700 group-hover:text-[#0066CC] font-medium text-sm">
                    {question}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Market Activity Pages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Market Activity & Data</h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Access real-time market data, news, and analysis across global markets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div 
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('stock-symbol')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#00A651] to-green-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00A651] transition-colors">
                Stock Symbols
              </h3>
              <p className="text-gray-600 text-sm">
                Real-time stock prices, charts, and detailed company information
              </p>
            </div>

            <div 
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('market-news')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00A651] transition-colors">
                Market News
              </h3>
              <p className="text-gray-600 text-sm">
                Latest financial news, market updates, and breaking developments
              </p>
            </div>

            <div 
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('market-indices')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00A651] transition-colors">
                Market Indices
              </h3>
              <p className="text-gray-600 text-sm">
                Track major market indices and their real-time performance
              </p>
            </div>
          </div>
        </div>

        {/* Key Products Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nasdaq Boardvantage®</h3>
              <p className="text-gray-600 mb-3 text-sm">Streamlined board meeting management and secure director collaboration platform</p>
              <button 
                onClick={() => {
                  setQuery('Nasdaq Boardvantage');
                  onSearch('Nasdaq Boardvantage');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors text-sm"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Surveillance SaaS</h3>
              <p className="text-gray-600 mb-3 text-sm">Detect market abuse in real-time with advanced surveillance technology</p>
              <button 
                onClick={() => {
                  setQuery('Market Surveillance');
                  onSearch('Market Surveillance');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors text-sm"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00A651] to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nasdaq ESG Data Portal</h3>
              <p className="text-gray-600 mb-3 text-sm">Single source for ESG metrics, scores, and comprehensive sustainability reporting</p>
              <button 
                onClick={() => {
                  setQuery('ESG Data Portal');
                  onSearch('ESG Data Portal');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors text-sm"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}