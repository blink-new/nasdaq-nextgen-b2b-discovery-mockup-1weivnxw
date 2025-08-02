import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Users, Shield, TrendingUp, FileText, Phone, Mail } from 'lucide-react';
import { ContextAwareSearchDrawer } from './ContextAwareSearchDrawer';
import ConversationalAdvisor from './ConversationalAdvisor';
import { Header } from './Header';

interface SolutionPageProps {
  onBack: () => void;
  onOpenAdvisor: () => void;
  onNavigateToPage?: (page: string) => void;
}

// Corporate Governance Page
export const CorporateGovernancePage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="corporate-governance"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <span className="text-2xl">🏛️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Corporate Governance Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline board management, enhance director collaboration, and ensure governance compliance with Nasdaq's comprehensive corporate governance platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                {[
                  'Secure board meeting management',
                  'Director collaboration tools',
                  'Governance compliance tracking',
                  'Document management system',
                  'Meeting analytics and insights',
                  'Mobile-first design'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nasdaq Boardvantage®</h3>
              <p className="text-gray-600 mb-6">
                The world's leading board portal solution, trusted by over 4,500 organizations globally to streamline governance processes and enhance board effectiveness.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Used by 4,500+ organizations
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Bank-level security
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  99.9% uptime guarantee
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Corporate Governance Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('board-portal')}
                className="p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Board Portal</h3>
                </div>
                <p className="text-gray-600 text-sm">Secure board materials, meetings, and voting platform</p>
              </button>
              
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('entity-management')}
                className="p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Entity Management</h3>
                </div>
                <p className="text-gray-600 text-sm">Corporate records, officers, and compliance obligations</p>
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">Bank-level encryption and security protocols protect your most sensitive board materials.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Trusted by boards across 90+ countries with 24/7 multilingual support.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600 text-sm">95% of customers report improved board efficiency within 6 months.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Surveillance Page
export const MarketSurveillancePage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="market-surveillance"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Surveillance Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detect market abuse in real-time with AI-powered surveillance technology that ensures regulatory compliance and maintains market integrity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Capabilities</h2>
              <div className="space-y-4">
                {[
                  'Real-time trade monitoring',
                  'AI-powered pattern detection',
                  'Cross-market surveillance',
                  'Regulatory reporting automation',
                  'Risk scoring algorithms',
                  'Customizable alert system'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Surveillance SaaS</h3>
              <p className="text-gray-600 mb-6">
                Cloud-based surveillance platform that monitors billions of transactions daily, helping exchanges and regulators maintain fair and orderly markets.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Monitors 50+ exchanges globally
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  99.99% detection accuracy
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Automated regulatory reporting
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Request Pricing
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Surveillance Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('trade-surveillance')}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Trade Surveillance</h3>
                </div>
                <p className="text-gray-600 text-sm">Abuse detection and best execution monitoring</p>
              </button>
              
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('communications-surveillance')}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Communications Surveillance</h3>
                </div>
                <p className="text-gray-600 text-sm">Email, chat, and voice analysis with NLP</p>
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600 text-sm">Meet all regulatory requirements with automated reporting and audit trails.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Market Integrity</h3>
                <p className="text-gray-600 text-sm">Protect market integrity with advanced detection of manipulation and abuse.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
                <p className="text-gray-600 text-sm">Reduce false positives by 80% with AI-powered intelligent filtering.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ESG & Sustainability Page
export const ESGSustainabilityPage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="esg-sustainability"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ESG & Sustainability Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ESG data, analytics, and reporting solutions to help organizations measure, manage, and communicate their sustainability performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ESG Capabilities</h2>
              <div className="space-y-4">
                {[
                  'Comprehensive ESG data coverage',
                  'Automated sustainability reporting',
                  'ESG risk assessment tools',
                  'Regulatory compliance tracking',
                  'Stakeholder engagement platform',
                  'Carbon footprint analytics'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nasdaq ESG Data Portal</h3>
              <p className="text-gray-600 mb-6">
                Single source for ESG metrics, scores, and analytics covering 40,000+ companies globally with real-time data updates and comprehensive reporting tools.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  40,000+ companies covered
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  500+ ESG metrics tracked
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Regulatory framework aligned
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ESG & Sustainability Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('esg-reporting')}
                className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600">ESG Reporting</h3>
                </div>
                <p className="text-gray-600 text-sm">CSRD, GRI, SASB, and TCFD framework mapping</p>
              </button>
              
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('carbon-accounting')}
                className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Carbon Accounting</h3>
                </div>
                <p className="text-gray-600 text-sm">Scopes 1-3 emissions tracking and supplier data</p>
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Streamlined Reporting</h3>
                <p className="text-gray-600 text-sm">Automate ESG reporting with templates aligned to global frameworks.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance Insights</h3>
                <p className="text-gray-600 text-sm">Benchmark performance against peers and industry standards.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
                <p className="text-gray-600 text-sm">Identify and mitigate ESG-related risks before they impact business.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Analytics Page
export const MarketAnalyticsPage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="market-analytics"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Analytics Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced market intelligence and analytics platform providing real-time insights, risk assessment, and performance analytics for informed decision-making.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Features</h2>
              <div className="space-y-4">
                {[
                  'Real-time market data feeds',
                  'Advanced risk analytics',
                  'Portfolio performance tracking',
                  'Predictive modeling tools',
                  'Custom dashboard creation',
                  'API integration capabilities'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analytics Suite</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive analytics platform processing terabytes of market data daily to deliver actionable insights for trading, risk management, and investment decisions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Real-time data from 200+ venues
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  1000+ analytical indicators
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Sub-millisecond latency
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Analytics Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('real-time-data')}
                className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Real-Time Data</h3>
                </div>
                <p className="text-gray-600 text-sm">Ultra-low latency market data feeds and order book depth</p>
              </button>
              
              <button
                onClick={() => onNavigateToPage && onNavigateToPage('historical-data')}
                className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Historical Data</h3>
                </div>
                <p className="text-gray-600 text-sm">Tick-level history with corporate actions and adjustments</p>
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600 text-sm">Access market-moving information as it happens with ultra-low latency feeds.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
                <p className="text-gray-600 text-sm">Advanced risk models and stress testing capabilities for portfolio protection.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customizable Platform</h3>
                <p className="text-gray-600 text-sm">Tailor analytics and dashboards to your specific business requirements.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Clearing & Settlement Page
export const ClearingSettlementPage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="clearing-settlement"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Clearing & Settlement Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive clearing and settlement services providing risk management, operational efficiency, and regulatory compliance for financial markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Clearing Services</h2>
              <div className="space-y-4">
                {[
                  'Central counterparty clearing',
                  'Risk management systems',
                  'Margin calculation engines',
                  'Settlement optimization',
                  'Collateral management',
                  'Regulatory reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nasdaq Clearing</h3>
              <p className="text-gray-600 mb-6">
                Leading clearing house providing central counterparty services for derivatives and securities markets with advanced risk management and operational excellence.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  $2+ trillion cleared annually
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  99.99% operational uptime
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Multi-asset class support
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Clearing Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
                <p className="text-gray-600 text-sm">Advanced risk management with real-time monitoring and margin optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
                <p className="text-gray-600 text-sm">Streamlined settlement processes reducing operational costs and complexity.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600 text-sm">Full compliance with global regulatory requirements and reporting standards.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Capital Markets Page
export const CapitalMarketsPage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
      // Store the search query in sessionStorage so SearchResults can access it
      sessionStorage.setItem('searchQuery', query);
      onNavigateToPage('search-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="capital-markets"
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

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Capital Markets Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capital markets infrastructure including listing services, market making, and trading solutions to help companies access global capital markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Capital Markets Services</h2>
              <div className="space-y-4">
                {[
                  'IPO and listing services',
                  'Market making solutions',
                  'Trading infrastructure',
                  'Investor relations tools',
                  'Corporate actions processing',
                  'Global market access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nasdaq Listing Services</h3>
              <p className="text-gray-600 mb-6">
                Premier global listing venue with comprehensive support for companies seeking to access public capital markets and grow their business worldwide.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  4,000+ listed companies
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Global market reach
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Regulatory expertise
                </div>
              </div>
              <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capital Markets Advantages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Market Leadership</h3>
                <p className="text-gray-600 text-sm">Home to the world's most innovative companies and largest tech IPOs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Access to international investors and global capital markets.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Dedicated listing specialists and comprehensive support throughout the process.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenAdvisor}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to our AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};