import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../data/mockData';

interface HeaderProps {
  onNavigateToPage?: (page: string) => void;
}

export function Header({ onNavigateToPage }: HeaderProps) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-[#0066CC]">NASDAQ</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center text-gray-700 hover:text-[#0066CC] px-3 py-2 text-sm font-medium"
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                    Solution Areas
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => {
                        onNavigateToPage?.('corporate-governance');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">🏛️</span>
                      <div>
                        <div className="font-medium">Corporate Governance</div>
                        <div className="text-xs text-gray-500">Board management and governance solutions</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToPage?.('market-surveillance');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">🔍</span>
                      <div>
                        <div className="font-medium">Market Surveillance</div>
                        <div className="text-xs text-gray-500">Real-time monitoring and compliance tools</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToPage?.('esg-solutions');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">🌱</span>
                      <div>
                        <div className="font-medium">ESG & Sustainability</div>
                        <div className="text-xs text-gray-500">Environmental, social, and governance data</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToPage?.('market-analytics');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">📊</span>
                      <div>
                        <div className="font-medium">Market Analytics</div>
                        <div className="text-xs text-gray-500">Advanced market intelligence and insights</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToPage?.('clearing-settlement');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">⚖️</span>
                      <div>
                        <div className="font-medium">Clearing & Settlement</div>
                        <div className="text-xs text-gray-500">Risk management and clearing services</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToPage?.('capital-markets');
                        setIsSolutionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066CC] flex items-center"
                    >
                      <span className="mr-3">💼</span>
                      <div>
                        <div className="font-medium">Capital Markets</div>
                        <div className="text-xs text-gray-500">Listing services and market access</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              Industries
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              About
            </a>
          </nav>

          {/* Market Indices */}
          <div className="hidden lg:flex items-center space-x-4">
            {mockData.indices.map((index) => (
              <div key={index.id} className="text-sm font-mono">
                <span className={`${
                  index.label.includes('▲') ? 'text-[#00A651]' : 'text-red-600'
                }`}>
                  {index.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#0066CC] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}