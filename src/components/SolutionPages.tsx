import React from 'react';
import { ArrowLeft, Shield, Building2, Leaf, BarChart3, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { ConversationalAdvisor } from './ConversationalAdvisor';

interface SolutionPageProps {
  onBack: () => void;
  onOpenAdvisor: () => void;
}

// Corporate Governance Solution Page
export const CorporateGovernancePage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
            </div>
            <div className="text-sm text-gray-500">
              NDX 12,534.10 ▲ 0.8% | OMX C25 1,910.22 ▼ 0.3%
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="solutions" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Corporate Governance Solutions</h1>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Streamline board operations, enhance director collaboration, and ensure regulatory compliance with Nasdaq's comprehensive corporate governance platform.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Board Meeting Management</h3>
                    <p className="text-gray-600">Secure document sharing, agenda management, and meeting coordination</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Director Collaboration</h3>
                    <p className="text-gray-600">Real-time communication and decision-making tools for board members</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compliance Tracking</h3>
                    <p className="text-gray-600">Automated compliance monitoring and regulatory reporting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Audit Trail</h3>
                    <p className="text-gray-600">Complete audit trail for all governance activities and decisions</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to enhance your board operations?</h3>
                <p className="text-gray-600 mb-4">Schedule a personalized demo to see how Nasdaq Boardvantage can transform your corporate governance.</p>
                <button
                  onClick={onOpenAdvisor}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Schedule Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Solutions</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Market Surveillance</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Leaf className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">ESG Data Portal</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Market Analytics</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium text-gray-900">Board Governance Best Practices</h4>
                  <p className="text-sm text-gray-600">White Paper</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-gray-900">Digital Transformation for Boards</h4>
                  <p className="text-sm text-gray-600">Webinar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Surveillance Solution Page
export const MarketSurveillancePage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
            </div>
            <div className="text-sm text-gray-500">
              NDX 12,534.10 ▲ 0.8% | OMX C25 1,910.22 ▼ 0.3%
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="solutions" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Market Surveillance Solutions</h1>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Detect market abuse, monitor trading patterns, and ensure regulatory compliance with advanced AI-powered surveillance technology.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-600">Continuous surveillance of trading activities and market patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Detection</h3>
                    <p className="text-gray-600">Machine learning algorithms to identify suspicious trading patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regulatory Reporting</h3>
                    <p className="text-gray-600">Automated compliance reporting and audit trail generation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Risk Analytics</h3>
                    <p className="text-gray-600">Advanced risk assessment and market integrity monitoring</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhance your market surveillance capabilities</h3>
                <p className="text-gray-600 mb-4">Get pricing information and see how our surveillance solutions can protect your market integrity.</p>
                <button
                  onClick={onOpenAdvisor}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Request Pricing
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Solutions</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Corporate Governance</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Leaf className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">ESG Data Portal</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Market Analytics</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium text-gray-900">Market Surveillance Best Practices</h4>
                  <p className="text-sm text-gray-600">Report</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-gray-900">AI in Financial Surveillance</h4>
                  <p className="text-sm text-gray-600">Webinar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ESG Solutions Page
export const ESGSolutionsPage: React.FC<SolutionPageProps> = ({ onBack, onOpenAdvisor }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
            </div>
            <div className="text-sm text-gray-500">
              NDX 12,534.10 ▲ 0.8% | OMX C25 1,910.22 ▼ 0.3%
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="solutions" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">ESG & Sustainability Solutions</h1>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive ESG data, analytics, and reporting solutions to help organizations meet sustainability goals and regulatory requirements.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ESG Data Portal</h3>
                    <p className="text-gray-600">Centralized access to comprehensive ESG metrics and scores</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sustainability Reporting</h3>
                    <p className="text-gray-600">Automated ESG reporting and disclosure management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Climate Risk Analytics</h3>
                    <p className="text-gray-600">Advanced climate risk assessment and scenario analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                    <p className="text-gray-600">Stay compliant with evolving ESG regulations and standards</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transform your ESG strategy</h3>
                <p className="text-gray-600 mb-4">Download our comprehensive ESG brochure to learn how we can help you achieve your sustainability goals.</p>
                <button
                  onClick={onOpenAdvisor}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  Download Brochure
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Solutions</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Corporate Governance</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Market Surveillance</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Market Analytics</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-gray-900">Quarterly ESG Trends Report</h4>
                  <p className="text-sm text-gray-600">Report</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium text-gray-900">ESG Disclosure Requirements</h4>
                  <p className="text-sm text-gray-600">Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};