import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Building2, Factory, Landmark, TrendingUp, Shield, Users, Globe, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface IndustryPageProps {
  onNavigateToPage: (page: string) => void;
  onOpenAdvisor: () => void;
}

export function IndustryPage({ onNavigateToPage, onOpenAdvisor }: IndustryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    // Navigate to search results with the query
    onNavigateToPage(`search?q=${encodeURIComponent(query)}`);
  };

  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Comprehensive solutions for banks, asset managers, and financial institutions to enhance operations, compliance, and customer experience.",
      solutions: ["Market Surveillance", "Risk Management", "Regulatory Reporting", "Trading Technology"],
      color: "bg-blue-600"
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Governance, ESG, and board management solutions for public and private companies across all sectors.",
      solutions: ["Board Management", "ESG Reporting", "Investor Relations", "Corporate Governance"],
      color: "bg-[#0066CC]"
    },
    {
      icon: Factory,
      title: "Technology",
      description: "Advanced technology solutions for fintech companies, trading firms, and technology-driven financial services.",
      solutions: ["Cloud Infrastructure", "API Solutions", "Data Analytics", "Market Data"],
      color: "bg-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      description: "Tools and data for asset managers, hedge funds, and institutional investors to make informed decisions.",
      solutions: ["Portfolio Analytics", "ESG Data", "Market Intelligence", "Risk Analytics"],
      color: "bg-[#00A651]"
    },
    {
      icon: Shield,
      title: "Regulatory & Compliance",
      description: "Comprehensive compliance solutions for organizations navigating complex regulatory environments.",
      solutions: ["Surveillance Technology", "Compliance Monitoring", "Regulatory Reporting", "Risk Assessment"],
      color: "bg-red-600"
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Solutions for exchanges, market operators, and global financial infrastructure providers.",
      solutions: ["Market Technology", "Clearing & Settlement", "Market Data", "Listing Services"],
      color: "bg-orange-600"
    }
  ];

  const caseStudies = [
    {
      company: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Needed to enhance market surveillance capabilities to detect complex trading patterns",
      solution: "Implemented Nasdaq's Market Surveillance SaaS with AI-powered detection algorithms",
      result: "Reduced false positives by 60% and improved detection accuracy by 40%"
    },
    {
      company: "Fortune 500 Corporation",
      industry: "Corporate",
      challenge: "Required streamlined board management and ESG reporting processes",
      solution: "Deployed Nasdaq Boardvantage® and ESG Data Portal for comprehensive governance",
      result: "Improved board efficiency by 50% and achieved 100% ESG reporting compliance"
    },
    {
      company: "Regional Exchange",
      industry: "Global Markets",
      challenge: "Needed to modernize trading infrastructure and expand market offerings",
      solution: "Upgraded to Nasdaq's market technology platform with advanced trading capabilities",
      result: "Increased trading volume by 35% and reduced latency by 70%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToPage={onNavigateToPage} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nasdaq serves diverse industries with tailored technology solutions that drive innovation, 
            ensure compliance, and enhance operational efficiency across global markets.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              onSearch={handleSearch}
              query={searchQuery}
              setQuery={setSearchQuery}
              pageContext="solutions"
              onNavigateToPage={onNavigateToPage}
            />
            
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

        {/* Industries Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#0066CC] transition-all duration-200"
                >
                  <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Success Stories</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            See how organizations across different industries have transformed their operations with Nasdaq solutions
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0066CC] text-white text-xs rounded-full font-medium">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {study.company}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Challenge:</span>
                    <p className="text-gray-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Solution:</span>
                    <p className="text-gray-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Result:</span>
                    <p className="text-[#00A651] mt-1 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how Nasdaq's industry-specific solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenAdvisor}
              className="bg-white text-[#0066CC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Talk to an Expert
            </button>
            <button 
              onClick={() => onNavigateToPage('home')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0066CC] transition-colors"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}