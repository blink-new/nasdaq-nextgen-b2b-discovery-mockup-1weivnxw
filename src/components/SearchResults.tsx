import { useState, useEffect } from 'react';
import { AnswerCard } from './AnswerCard';
import { ProductRail } from './ProductRail';
import { ResourceRail } from './ResourceRail';
import { SearchBar } from './SearchBar';
import { Header } from './Header';
import { mockData } from '../data/mockData';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

interface SearchResultsProps {
  query: string;
  onBackToSearch: () => void;
  onNavigateToPage?: (page: string) => void;
  onOpenAdvisor: () => void;
}

interface FilterState {
  industries: string[];
  resourceTypes: string[];
  productClasses: string[];
  problemAreas: string[];
}

interface FilterSectionProps {
  title: string;
  items: Array<{ id: string; name: string; count: number }>;
  selectedItems: string[];
  onToggle: (id: string) => void;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

function FilterSection({ title, items, selectedItems, onToggle, isExpanded, onToggleExpanded }: FilterSectionProps) {
  const displayItems = isExpanded ? items : items.slice(0, 5);
  
  return (
    <div className="border-b border-gray-200 pb-6">
      <button
        onClick={onToggleExpanded}
        className="flex items-center justify-between w-full text-left mb-4"
      >
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      
      <div className="space-y-3">
        {displayItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <Checkbox
              id={item.id}
              checked={selectedItems.includes(item.id)}
              onCheckedChange={() => onToggle(item.id)}
              className="data-[state=checked]:bg-[#0066CC] data-[state=checked]:border-[#0066CC]"
            />
            <label
              htmlFor={item.id}
              className="flex-1 text-sm text-gray-700 cursor-pointer hover:text-gray-900"
            >
              {item.name}
            </label>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {item.count}
            </span>
          </div>
        ))}
        
        {items.length > 5 && (
          <button
            onClick={onToggleExpanded}
            className="text-sm text-[#0066CC] hover:text-blue-700 font-medium"
          >
            {isExpanded ? 'Show less' : `Show ${items.length - 5} more`}
          </button>
        )}
      </div>
    </div>
  );
}

export function SearchResults({ query, onBackToSearch, onNavigateToPage, onOpenAdvisor }: SearchResultsProps) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filters, setFilters] = useState<FilterState>({
    industries: [],
    resourceTypes: [],
    productClasses: [],
    problemAreas: []
  });

  // Initialize search query from sessionStorage if available
  useEffect(() => {
    const storedQuery = sessionStorage.getItem('searchQuery');
    if (storedQuery) {
      setSearchQuery(storedQuery);
      // Clear the stored query after using it
      sessionStorage.removeItem('searchQuery');
    }
  }, []);

  const [expandedSections, setExpandedSections] = useState({
    industries: true,
    resourceTypes: true,
    productClasses: true,
    problemAreas: true
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    // You could also trigger a new search here if needed
  };

  const handleFilterToggle = (category: keyof FilterState, id: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(id)
        ? prev[category].filter(item => item !== id)
        : [...prev[category], id]
    }));
  };

  const handleSectionToggle = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      industries: [],
      resourceTypes: [],
      productClasses: [],
      problemAreas: []
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(filters).flat().length;
  };

  const getActiveFilterLabels = () => {
    const labels: string[] = [];
    
    filters.industries.forEach(id => {
      const item = mockData.searchFilters.industries.find(i => i.id === id);
      if (item) labels.push(item.name);
    });
    
    filters.resourceTypes.forEach(id => {
      const item = mockData.searchFilters.resourceTypes.find(i => i.id === id);
      if (item) labels.push(item.name);
    });
    
    filters.productClasses.forEach(id => {
      const item = mockData.searchFilters.productClasses.find(i => i.id === id);
      if (item) labels.push(item.name);
    });
    
    filters.problemAreas.forEach(id => {
      const item = mockData.searchFilters.problemAreas.find(i => i.id === id);
      if (item) labels.push(item.name);
    });
    
    return labels;
  };

  const removeFilter = (category: keyof FilterState, id: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item !== id)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateToPage={onNavigateToPage} />
      
      {/* Search Bar */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar pageContext="solutions" onSearch={handleSearch} query={searchQuery} setQuery={setSearchQuery} onNavigateToPage={onNavigateToPage} />
          
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



      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Search */}
        <div className="mb-6">
          <button
            onClick={onBackToSearch}
            className="text-[#0066CC] hover:text-blue-700 font-medium text-sm flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to search</span>
          </button>
        </div>

        {/* Search Query Display */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search results for "{searchQuery}"
          </h1>
          <p className="text-gray-600">
            Found relevant products, resources, and solutions
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Faceted Search Filters - Left Sidebar */}
          <div className={`lg:w-96 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-[#0066CC]" />
                  Filters
                </h2>
                {getActiveFilterCount() > 0 && (
                  <Button
                    onClick={clearAllFilters}
                    variant="ghost"
                    size="sm"
                    className="text-[#0066CC] hover:text-blue-700"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              {/* Active Filters */}
              {getActiveFilterCount() > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {getActiveFilterLabels().map((label, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#0066CC] text-white hover:bg-blue-700 cursor-pointer"
                        onClick={() => {
                          // Find and remove the filter
                          const industryItem = mockData.searchFilters.industries.find(i => i.name === label);
                          const resourceItem = mockData.searchFilters.resourceTypes.find(i => i.name === label);
                          const productItem = mockData.searchFilters.productClasses.find(i => i.name === label);
                          const problemItem = mockData.searchFilters.problemAreas.find(i => i.name === label);
                          
                          if (industryItem) removeFilter('industries', industryItem.id);
                          else if (resourceItem) removeFilter('resourceTypes', resourceItem.id);
                          else if (productItem) removeFilter('productClasses', productItem.id);
                          else if (problemItem) removeFilter('problemAreas', problemItem.id);
                        }}
                      >
                        {label}
                        <X className="h-3 w-3 ml-1" />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Industry Filter */}
                <FilterSection
                  title="Industry"
                  items={mockData.searchFilters.industries}
                  selectedItems={filters.industries}
                  onToggle={(id) => handleFilterToggle('industries', id)}
                  isExpanded={expandedSections.industries}
                  onToggleExpanded={() => handleSectionToggle('industries')}
                />

                {/* Resource Type Filter */}
                <FilterSection
                  title="Resource Type"
                  items={mockData.searchFilters.resourceTypes}
                  selectedItems={filters.resourceTypes}
                  onToggle={(id) => handleFilterToggle('resourceTypes', id)}
                  isExpanded={expandedSections.resourceTypes}
                  onToggleExpanded={() => handleSectionToggle('resourceTypes')}
                />

                {/* Product Class Filter */}
                <FilterSection
                  title="Product Class"
                  items={mockData.searchFilters.productClasses}
                  selectedItems={filters.productClasses}
                  onToggle={(id) => handleFilterToggle('productClasses', id)}
                  isExpanded={expandedSections.productClasses}
                  onToggleExpanded={() => handleSectionToggle('productClasses')}
                />

                {/* Problem Areas Filter */}
                <FilterSection
                  title="Problem Areas"
                  items={mockData.searchFilters.problemAreas}
                  selectedItems={filters.problemAreas}
                  onToggle={(id) => handleFilterToggle('problemAreas', id)}
                  isExpanded={expandedSections.problemAreas}
                  onToggleExpanded={() => handleSectionToggle('problemAreas')}
                />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Results Summary */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing results {getActiveFilterCount() > 0 ? 'filtered by ' + getActiveFilterCount() + ' criteria' : 'for all categories'}
              </p>
              <div className="text-sm text-gray-500">
                {mockData.products.length + mockData.resources.length} results found
              </div>
            </div>

            {/* Answer Card */}
            <AnswerCard query={searchQuery} />

            {/* Product Rail */}
            <ProductRail query={searchQuery} />

            {/* Resource Rail */}
            <ResourceRail query={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}