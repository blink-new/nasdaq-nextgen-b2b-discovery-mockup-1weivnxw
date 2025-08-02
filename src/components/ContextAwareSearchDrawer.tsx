import { useState, useEffect, useRef } from 'react';
import { Search, X, ExternalLink, ChevronRight, Building2, Shield, Leaf, TrendingUp, FileText, Users, Settings, BarChart3, Database, MessageSquare, AlertTriangle, Zap, Globe } from 'lucide-react';
import solutionTaxonomy from '../data/solutionTaxonomy.json';

interface ContextAwareSearchDrawerProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  currentPageId?: string; // e.g., 'corporate-governance', 'market-surveillance/trade-surveillance'
  onNavigateToPage?: (page: string) => void;
}

interface SolutionArea {
  id: string;
  title: string;
  href: string;
  description: string;
  tags?: string[];
  faqs?: FAQ[];
  children?: SolutionArea[];
  related?: string[];
}

interface FAQ {
  id: string;
  question: string;
  href: string;
}

interface DrawerContent {
  left: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      href: string;
      description: string;
    }>;
  };
  right: {
    title: string;
    items: FAQ[];
  };
}

// Function to get appropriate icon for solution areas
const getSolutionIcon = (id: string, tags?: string[]) => {
  // Corporate Governance icons
  if (id.includes('board') || id.includes('governance')) return Building2;
  if (id.includes('entity') || id.includes('subsidiary')) return Users;
  if (id.includes('filing') || id.includes('regulatory')) return FileText;
  if (id.includes('insider') || id.includes('trading')) return Shield;
  if (id.includes('policy') || id.includes('attestation')) return Settings;
  if (id.includes('sox') || id.includes('audit')) return AlertTriangle;
  if (id.includes('analytics') && id.includes('governance')) return BarChart3;
  
  // Market Surveillance icons
  if (id.includes('surveillance') || id.includes('monitoring')) return Shield;
  if (id.includes('trade') || id.includes('abuse')) return TrendingUp;
  if (id.includes('communication') || id.includes('voice') || id.includes('chat')) return MessageSquare;
  if (id.includes('alert') || id.includes('tuning')) return AlertTriangle;
  if (id.includes('case') || id.includes('workflow')) return FileText;
  if (id.includes('data') && id.includes('ingestion')) return Database;
  if (id.includes('records') || id.includes('retention')) return FileText;
  
  // ESG & Sustainability icons
  if (id.includes('esg') || id.includes('sustainability')) return Leaf;
  if (id.includes('carbon') || id.includes('emission')) return Globe;
  if (id.includes('materiality') || id.includes('risk')) return AlertTriangle;
  if (id.includes('supplier') || id.includes('engagement')) return Users;
  if (id.includes('assurance') || id.includes('audit')) return Shield;
  
  // Market Analytics icons
  if (id.includes('real-time') || id.includes('market-data')) return Zap;
  if (id.includes('historical') || id.includes('tick')) return Database;
  if (id.includes('analytics') || id.includes('platform')) return BarChart3;
  if (id.includes('alt-data') || id.includes('marketplace')) return Globe;
  if (id.includes('news') || id.includes('sentiment')) return MessageSquare;
  if (id.includes('visualization') || id.includes('dashboard')) return BarChart3;
  
  // Check tags for additional context
  if (tags) {
    if (tags.includes('governance') || tags.includes('board')) return Building2;
    if (tags.includes('surveillance') || tags.includes('compliance')) return Shield;
    if (tags.includes('esg') || tags.includes('carbon')) return Leaf;
    if (tags.includes('market-data') || tags.includes('analytics')) return TrendingUp;
  }
  
  // Default icon
  return ChevronRight;
};

export function ContextAwareSearchDrawer({ 
  onSearch, 
  query, 
  setQuery, 
  currentPageId,
  onNavigateToPage 
}: ContextAwareSearchDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Find current page in taxonomy and generate context-aware content
  useEffect(() => {
    if (!currentPageId) {
      setDrawerContent(null);
      return;
    }

    const findPageInTaxonomy = (areas: SolutionArea[], pageId: string): SolutionArea | null => {
      for (const area of areas) {
        if (area.id === pageId) return area;
        if (area.children) {
          const found = findPageInTaxonomy(area.children, pageId);
          if (found) return found;
        }
      }
      return null;
    };

    const findAreaForPage = (areas: SolutionArea[], pageId: string): SolutionArea | null => {
      for (const area of areas) {
        if (area.id === pageId) return area;
        if (area.children) {
          const found = findPageInTaxonomy(area.children, pageId);
          if (found) return area; // Return the parent area
        }
      }
      return null;
    };

    const currentPage = findPageInTaxonomy(solutionTaxonomy.areas, currentPageId);
    const parentArea = findAreaForPage(solutionTaxonomy.areas, currentPageId);

    if (currentPage || parentArea) {
      const contextArea = parentArea || currentPage;
      
      // Generate left column - related pages
      let leftItems = [];
      
      if (currentPage?.related) {
        // Find related pages by ID
        const relatedPages = [];
        for (const relatedId of currentPage.related) {
          const relatedPage = findPageInTaxonomy(solutionTaxonomy.areas, relatedId);
          if (relatedPage && relatedPage.id !== currentPageId) {
            relatedPages.push({
              id: relatedPage.id,
              title: relatedPage.title,
              href: relatedPage.href,
              description: relatedPage.description
            });
          }
        }
        leftItems = relatedPages.slice(0, 6);
      }
      
      // If no related pages or not enough, use siblings from parent area
      if (leftItems.length < 6 && contextArea?.children) {
        const siblings = contextArea.children
          .filter(child => child.id !== currentPageId)
          .map(child => ({
            id: child.id,
            title: child.title,
            href: child.href,
            description: child.description
          }));
        
        leftItems = [...leftItems, ...siblings].slice(0, 6);
      }
      
      // If still not enough, use top-level areas
      if (leftItems.length < 6) {
        const topAreas = solutionTaxonomy.areas
          .filter(area => area.id !== currentPageId && !leftItems.some(item => item.id === area.id))
          .map(area => ({
            id: area.id,
            title: area.title,
            href: area.href,
            description: area.description
          }));
        
        leftItems = [...leftItems, ...topAreas].slice(0, 6);
      }
      
      // Generate right column - FAQs
      let rightItems = [];
      
      // Use page-specific FAQs first
      if (currentPage?.faqs) {
        rightItems = [...currentPage.faqs];
      }
      
      // If not enough, use parent area FAQs
      if (rightItems.length < 6 && contextArea?.faqs && contextArea.id !== currentPage?.id) {
        rightItems = [...rightItems, ...contextArea.faqs];
      }
      
      // If still not enough, use global defaults
      if (rightItems.length < 6) {
        const remainingCount = 6 - rightItems.length;
        const globalFAQs = solutionTaxonomy.defaults.right.items
          .filter(faq => !rightItems.some(item => item.id === faq.id))
          .slice(0, remainingCount);
        rightItems = [...rightItems, ...globalFAQs];
      }
      
      rightItems = rightItems.slice(0, 6);

      setDrawerContent({
        left: {
          title: "Related Solution Areas",
          items: leftItems
        },
        right: {
          title: "Common Customer Questions",
          items: rightItems
        }
      });
    } else {
      // Use global defaults
      setDrawerContent({
        left: solutionTaxonomy.defaults.left,
        right: solutionTaxonomy.defaults.right
      });
    }
  }, [currentPageId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setIsOpen(false);
    }
  };

  const handleNavigateToSolution = (href: string, id: string) => {
    setIsOpen(false);
    if (onNavigateToPage) {
      // Convert href to page navigation - handle nested solutions
      if (href.includes('/corporate-governance/board-portal')) {
        onNavigateToPage('board-portal');
      } else if (href.includes('/corporate-governance/entity-management')) {
        onNavigateToPage('entity-management');
      } else if (href.includes('/market-surveillance/trade-surveillance')) {
        onNavigateToPage('trade-surveillance');
      } else if (href.includes('/market-surveillance/communications-surveillance')) {
        onNavigateToPage('communications-surveillance');
      } else if (href.includes('/esg-sustainability/esg-reporting')) {
        onNavigateToPage('esg-reporting');
      } else if (href.includes('/esg-sustainability/carbon-accounting')) {
        onNavigateToPage('carbon-accounting');
      } else if (href.includes('/market-analytics/real-time-data')) {
        onNavigateToPage('real-time-data');
      } else if (href.includes('/market-analytics/historical-data')) {
        onNavigateToPage('historical-data');
      } else if (href.includes('/corporate-governance')) {
        onNavigateToPage('corporate-governance');
      } else if (href.includes('/market-surveillance')) {
        onNavigateToPage('market-surveillance');
      } else if (href.includes('/esg-sustainability')) {
        onNavigateToPage('esg-solutions');
      } else if (href.includes('/market-analytics')) {
        onNavigateToPage('market-analytics');
      } else {
        // Fallback to search
        setQuery(id);
        onSearch(id);
      }
    }
  };

  const handleFAQClick = (faq: FAQ) => {
    setIsOpen(false);
    if (faq.href.includes('/search?q=')) {
      // Extract search query from URL
      const searchQuery = decodeURIComponent(faq.href.split('q=')[1]);
      setQuery(searchQuery);
      onSearch(searchQuery);
    } else {
      // Navigate to solution page
      handleNavigateToSolution(faq.href, faq.id);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="Search for products, solutions, market data, or news..."
            className="w-full pl-11 pr-11 py-3 text-base border-2 border-gray-200 rounded-lg focus:border-[#0066CC] focus:outline-none transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>

      {isOpen && !query && drawerContent && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Related Solution Areas */}
              <div>
                <h3 className="text-sm font-semibold text-[#0066CC] mb-3 border-b border-gray-100 pb-2 sticky top-0 bg-white">
                  {drawerContent.left.title}
                </h3>
                <div className="space-y-2">
                  {drawerContent.left.items.map((item) => {
                    const IconComponent = getSolutionIcon(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigateToSolution(item.href, item.id)}
                        className="block w-full text-left p-2.5 hover:bg-blue-50 rounded-lg text-sm transition-colors group border border-transparent hover:border-blue-100"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start flex-1">
                            <IconComponent className="h-4 w-4 text-gray-400 group-hover:text-[#0066CC] mr-2.5 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 group-hover:text-[#0066CC] text-sm mb-1">
                                {item.title}
                              </div>
                              <div className="text-gray-600 text-xs leading-relaxed">
                                {item.description}
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-[#0066CC] ml-2 mt-0.5 flex-shrink-0" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Common Customer Questions */}
              <div>
                <h3 className="text-sm font-semibold text-[#0066CC] mb-3 border-b border-gray-100 pb-2 sticky top-0 bg-white">
                  {drawerContent.right.title}
                </h3>
                <div className="space-y-2">
                  {drawerContent.right.items.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleFAQClick(faq)}
                      className="block w-full text-left p-2.5 hover:bg-blue-50 rounded-lg text-sm transition-colors group border border-transparent hover:border-blue-100"
                    >
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2 text-xs mt-1 flex-shrink-0">•</span>
                        <div className="text-gray-900 group-hover:text-[#0066CC] text-sm leading-relaxed">
                          {faq.question}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="text-center py-8 text-gray-500">
              <div className="text-sm">Searching for "{query}"...</div>
              <div className="text-xs mt-1">Press Enter to search</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}