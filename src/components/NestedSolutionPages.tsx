import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Users, Shield, TrendingUp, FileText, Phone, Building2, Leaf, BarChart3, Database, MessageSquare, AlertTriangle, Zap, Globe, Settings } from 'lucide-react';
import { ContextAwareSearchDrawer } from './ContextAwareSearchDrawer';
import { Header } from './Header';

interface NestedSolutionPageProps {
  onBack: () => void;
  onOpenAdvisor: () => void;
  onNavigateToPage?: (page: string) => void;
}

// Corporate Governance Nested Pages

export const BoardPortalPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Corporate Governance
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="board-portal"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Board Portal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure board materials, meetings, and voting platform designed for modern governance needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                {[
                  'Encrypted board pack distribution',
                  'Real-time meeting collaboration',
                  'Digital voting and resolutions',
                  'Secure document annotations',
                  'Offline access capabilities',
                  'Audit trail and compliance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Board Communications</h3>
              <p className="text-gray-600 mb-6">
                Bank-level encryption ensures your most sensitive board materials remain secure while enabling seamless collaboration.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  256-bit encryption
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Multi-device access
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Digital watermarking
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EntityManagementPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Corporate Governance
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="entity-management"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Entity & Subsidiary Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Centralized management of corporate records, officers, and compliance obligations across your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Management Features</h2>
              <div className="space-y-4">
                {[
                  'Corporate structure visualization',
                  'Officer and director tracking',
                  'Statutory register maintenance',
                  'Obligation calendar management',
                  'Automated org chart generation',
                  'Compliance deadline tracking'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Entity Oversight</h3>
              <p className="text-gray-600 mb-6">
                Maintain complete visibility and control over your corporate structure with automated tracking and reporting.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Building2 className="w-4 h-4 mr-2" />
                  Multi-jurisdiction support
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Automated reporting
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Compliance alerts
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Surveillance Nested Pages

export const TradeSurveillancePage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Market Surveillance
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="trade-surveillance"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trade Surveillance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced abuse detection and best execution monitoring to maintain market integrity and regulatory compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detection Capabilities</h2>
              <div className="space-y-4">
                {[
                  'Spoofing and layering detection',
                  'Wash trade identification',
                  'Momentum ignition monitoring',
                  'Best execution analysis',
                  'Cross-market surveillance',
                  'Real-time alert generation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Detection</h3>
              <p className="text-gray-600 mb-6">
                Machine learning algorithms continuously adapt to new manipulation patterns, ensuring comprehensive market protection.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  99.9% detection accuracy
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 mr-2" />
                  Sub-second response time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Database className="w-4 h-4 mr-2" />
                  Billions of trades analyzed
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CommunicationsSurveillancePage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Market Surveillance
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="communications-surveillance"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Communications Surveillance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring of email, chat, and voice communications with advanced NLP and transcription capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Surveillance Features</h2>
              <div className="space-y-4">
                {[
                  'Voice transcription and analysis',
                  'Email and chat monitoring',
                  'Multilingual lexicon support',
                  'Sentiment analysis',
                  'Pattern recognition',
                  'Regulatory compliance reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced NLP Technology</h3>
              <p className="text-gray-600 mb-6">
                Natural language processing and machine learning identify suspicious communications across multiple channels and languages.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  50+ languages supported
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Real-time monitoring
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy compliant
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ESG & Sustainability Nested Pages

export const ESGReportingPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to ESG & Sustainability
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="esg-reporting"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ESG Reporting & Frameworks</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined ESG reporting with CSRD, GRI, SASB, and TCFD framework mapping and automated workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reporting Capabilities</h2>
              <div className="space-y-4">
                {[
                  'CSRD/ESRS compliance',
                  'GRI and SASB mapping',
                  'TCFD scenario analysis',
                  'Automated data collection',
                  'Multi-framework alignment',
                  'Audit trail maintenance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Framework Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly map disclosures across multiple ESG frameworks with automated data validation and quality checks.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Leaf className="w-4 h-4 mr-2" />
                  500+ ESG indicators
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  Global standards aligned
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Audit-ready reports
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CarbonAccountingPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to ESG & Sustainability
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="carbon-accounting"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Emissions & Carbon Accounting</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carbon footprint tracking across Scopes 1-3 with emission factors and supplier data integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Carbon Tracking</h2>
              <div className="space-y-4">
                {[
                  'Scope 1, 2, and 3 emissions',
                  'Location and market-based methods',
                  'Emission factor libraries',
                  'Supplier data collection',
                  'RECs and carbon credits',
                  'Science-based targets alignment'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Carbon Management</h3>
              <p className="text-gray-600 mb-6">
                Track, measure, and reduce your carbon footprint with industry-leading emission factors and automated calculations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Database className="w-4 h-4 mr-2" />
                  10,000+ emission factors
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Real-time calculations
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  GHG Protocol compliant
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Tracking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Analytics Nested Pages

export const RealTimeDataPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Market Analytics
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="real-time-data"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Market Data</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ultra-low latency market data feeds with consolidated pricing and full order book depth from global exchanges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Features</h2>
              <div className="space-y-4">
                {[
                  'Sub-millisecond latency',
                  'Consolidated market feeds',
                  'Full order book depth',
                  'WebSocket and REST APIs',
                  'Global exchange coverage',
                  'Real-time entitlements'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning-Fast Data Delivery</h3>
              <p className="text-gray-600 mb-6">
                Get market-moving information as it happens with our ultra-low latency infrastructure and global data centers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 mr-2" />
                  &lt;1ms latency
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  200+ global venues
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Database className="w-4 h-4 mr-2" />
                  Billions of updates/day
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HistoricalDataPage: React.FC<NestedSolutionPageProps> = ({ onBack, onOpenAdvisor, onNavigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (onNavigateToPage) {
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
          Back to Market Analytics
        </button>

        <ContextAwareSearchDrawer 
          onSearch={handleSearch} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          currentPageId="historical-data"
          onNavigateToPage={onNavigateToPage} 
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Database className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Historical Data & Tick Store</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tick-level historical data with corporate actions and survivorship bias adjustments for accurate backtesting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Historical Features</h2>
              <div className="space-y-4">
                {[
                  'Tick-level granularity',
                  'Corporate actions adjusted',
                  'Survivorship bias free',
                  'Multi-year coverage',
                  'Symbol change tracking',
                  'Point-in-time reconstruction'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research-Grade Data Quality</h3>
              <p className="text-gray-600 mb-6">
                Clean, normalized historical data with proper adjustments for splits, dividends, and other corporate actions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Database className="w-4 h-4 mr-2" />
                  20+ years of history
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Microsecond timestamps
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Quality assured
                </div>
              </div>
              <button 
                onClick={onOpenAdvisor}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};