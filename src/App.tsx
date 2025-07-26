import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SearchResults } from './components/SearchResults';
import ConversationalAdvisor from './components/ConversationalAdvisor';
import { CorporateGovernancePage, MarketSurveillancePage, ESGSolutionsPage } from './components/SolutionPages';
import { StockSymbolPage, MarketNewsPage, MarketIndicesPage } from './components/MarketPages';
import { 
  CorporateGovernancePage as CorporateGovernancePageNew, 
  MarketSurveillancePage as MarketSurveillancePageNew, 
  ESGSustainabilityPage, 
  MarketAnalyticsPage, 
  ClearingSettlementPage, 
  CapitalMarketsPage 
} from './components/AllSolutionPages';

type ViewType = 'home' | 'results' | 'corporate-governance' | 'market-surveillance' | 'esg-solutions' | 'market-analytics' | 'clearing-settlement' | 'capital-markets' | 'stock-symbol' | 'market-news' | 'market-indices';

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
      {/* Show header only on home and results pages */}
      {(currentView === 'home' || currentView === 'results') && <Header onNavigateToPage={handleNavigateToPage} />}
      
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
        />
      ) : currentView === 'corporate-governance' ? (
        <CorporateGovernancePageNew 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'market-surveillance' ? (
        <MarketSurveillancePageNew 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'esg-solutions' ? (
        <ESGSustainabilityPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'market-analytics' ? (
        <MarketAnalyticsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'clearing-settlement' ? (
        <ClearingSettlementPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'capital-markets' ? (
        <CapitalMarketsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'stock-symbol' ? (
        <StockSymbolPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'market-news' ? (
        <MarketNewsPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : currentView === 'market-indices' ? (
        <MarketIndicesPage 
          onBack={handleBackToSearch}
          onOpenAdvisor={handleOpenAdvisor}
        />
      ) : null}

      <ConversationalAdvisor 
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
      />
    </div>
  );
}

export default App;