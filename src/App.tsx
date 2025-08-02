import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SearchResults } from './components/SearchResults';
import ConversationalAdvisor from './components/ConversationalAdvisor';
import { FloatingChatButton } from './components/FloatingChatButton';
import { StockSymbolPage, MarketNewsPage, MarketIndicesPage } from './components/MarketPages';
import { 
  CorporateGovernancePage, 
  MarketSurveillancePage, 
  ESGSustainabilityPage, 
  MarketAnalyticsPage, 
  ClearingSettlementPage, 
  CapitalMarketsPage 
} from './components/AllSolutionPages';
import {
  BoardPortalPage,
  EntityManagementPage,
  TradeSurveillancePage,
  CommunicationsSurveillancePage,
  ESGReportingPage,
  CarbonAccountingPage,
  RealTimeDataPage,
  HistoricalDataPage
} from './components/NestedSolutionPages';
import { IndustryPage } from './components/IndustryPage';
import { ResourcesPage } from './components/ResourcesPage';
import { AboutPage } from './components/AboutPage';

type ViewType = 'home' | 'results' | 'corporate-governance' | 'market-surveillance' | 'esg-solutions' | 'market-analytics' | 'clearing-settlement' | 'capital-markets' | 'stock-symbol' | 'market-news' | 'market-indices' | 'industry' | 'resources' | 'about' | 'board-portal' | 'entity-management' | 'trade-surveillance' | 'communications-surveillance' | 'esg-reporting' | 'carbon-accounting' | 'real-time-data' | 'historical-data';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('results');
  };

  const handleBackToSearch = () => {
    setCurrentView('home');
  };

  const handleNavigateToPage = (page: ViewType) => {
    setCurrentView(page);
  };

  const handleOpenAdvisor = () => {
    setIsAdvisorOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'home' ? (
        <HomePage 
          onSearch={handleSearch}
          query={searchQuery}
          setQuery={setSearchQuery}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'results' ? (
        <SearchResults 
          query={searchQuery}
          onBackToSearch={handleBackToSearch}
          onNavigateToPage={handleNavigateToPage}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'corporate-governance' ? (
        <CorporateGovernancePage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'market-surveillance' ? (
        <MarketSurveillancePage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'esg-solutions' ? (
        <ESGSustainabilityPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'market-analytics' ? (
        <MarketAnalyticsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'clearing-settlement' ? (
        <ClearingSettlementPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'capital-markets' ? (
        <CapitalMarketsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'stock-symbol' ? (
        <StockSymbolPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'market-news' ? (
        <MarketNewsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'market-indices' ? (
        <MarketIndicesPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'industry' ? (
        <IndustryPage 
          onNavigateToPage={handleNavigateToPage}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'resources' ? (
        <ResourcesPage 
          onNavigateToPage={handleNavigateToPage}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'about' ? (
        <AboutPage 
          onNavigateToPage={handleNavigateToPage}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'board-portal' ? (
        <BoardPortalPage 
          onBack={() => setCurrentView('corporate-governance')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'entity-management' ? (
        <EntityManagementPage 
          onBack={() => setCurrentView('corporate-governance')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'trade-surveillance' ? (
        <TradeSurveillancePage 
          onBack={() => setCurrentView('market-surveillance')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'communications-surveillance' ? (
        <CommunicationsSurveillancePage 
          onBack={() => setCurrentView('market-surveillance')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'esg-reporting' ? (
        <ESGReportingPage 
          onBack={() => setCurrentView('esg-solutions')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'carbon-accounting' ? (
        <CarbonAccountingPage 
          onBack={() => setCurrentView('esg-solutions')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'real-time-data' ? (
        <RealTimeDataPage 
          onBack={() => setCurrentView('market-analytics')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : currentView === 'historical-data' ? (
        <HistoricalDataPage 
          onBack={() => setCurrentView('market-analytics')}
          onOpenAdvisor={handleOpenAdvisor}
          onNavigateToPage={handleNavigateToPage}
        />
      ) : null}

      <ConversationalAdvisor 
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
      />
      
      {/* Floating Chat Button - Always visible */}
      <FloatingChatButton onClick={handleOpenAdvisor} />
    </div>
  );
}

export default App;