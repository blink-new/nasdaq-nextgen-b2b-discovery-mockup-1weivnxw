import { SearchBar } from './SearchBar';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Nasdaq's
            <span className="text-[#0066CC]"> Next-Gen Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Find the perfect technology solutions to power your business. 
            Search through our comprehensive suite of products, resources, and expertise.
          </p>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={onSearch} query={query} setQuery={setQuery} pageContext="solutions" />
          </div>

          {/* Assistant Icon */}
          <div className="mb-16 flex justify-center">
            <button
              onClick={onOpenAdvisor}
              className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#0066CC] transition-all duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#0066CC] to-[#00A651] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 group-hover:text-[#0066CC] font-medium">
                Ask our AI Assistant
              </span>
              <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Top Solution Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Top Solution Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0066CC] transition-all duration-200 cursor-pointer group"
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
                  <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0066CC] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Common Customer Questions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Common Customer Questions</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Get instant answers to the most frequently asked questions from Nasdaq customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {customerQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(question);
                  onSearch(question);
                }}
                className="text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-[#0066CC] hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full group-hover:bg-[#00A651] transition-colors"></div>
                  <span className="text-gray-700 group-hover:text-[#0066CC] font-medium">
                    {question}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Market Activity Pages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Market Activity & Data</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Access real-time market data, news, and analysis across global markets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('stock-symbol')}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#00A651] to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00A651] transition-colors">
                Stock Symbols
              </h3>
              <p className="text-gray-600">
                Real-time stock prices, charts, and detailed company information
              </p>
            </div>

            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('market-news')}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00A651] transition-colors">
                Market News
              </h3>
              <p className="text-gray-600">
                Latest financial news, market updates, and breaking developments
              </p>
            </div>

            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A651] transition-all duration-200 cursor-pointer group text-center"
              onClick={() => onNavigateToPage('market-indices')}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00A651] transition-colors">
                Market Indices
              </h3>
              <p className="text-gray-600">
                Track major market indices and their real-time performance
              </p>
            </div>
          </div>
        </div>

        {/* Key Products Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nasdaq Boardvantage®</h3>
              <p className="text-gray-600 mb-4">Streamlined board meeting management and secure director collaboration platform</p>
              <button 
                onClick={() => {
                  setQuery('Nasdaq Boardvantage');
                  onSearch('Nasdaq Boardvantage');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Surveillance SaaS</h3>
              <p className="text-gray-600 mb-4">Detect market abuse in real-time with advanced surveillance technology</p>
              <button 
                onClick={() => {
                  setQuery('Market Surveillance');
                  onSearch('Market Surveillance');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors"
              >
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00A651] to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nasdaq ESG Data Portal</h3>
              <p className="text-gray-600 mb-4">Single source for ESG metrics, scores, and comprehensive sustainability reporting</p>
              <button 
                onClick={() => {
                  setQuery('ESG Data Portal');
                  onSearch('ESG Data Portal');
                }}
                className="text-[#0066CC] font-medium hover:text-blue-700 transition-colors"
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