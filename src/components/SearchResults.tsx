import { AnswerCard } from './AnswerCard';
import { ProductRail } from './ProductRail';
import { ResourceRail } from './ResourceRail';
import { SearchBar } from './SearchBar';

interface SearchResultsProps {
  query: string;
  onBackToSearch: () => void;
}

export function SearchResults({ query, onBackToSearch }: SearchResultsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <SearchBar pageContext="solutions" />
        </div>
      </div>

      {/* Sticky Talk to Advisor Button */}
      <div className="sticky top-20 z-30 flex justify-center mb-8">
        <button className="bg-[#00A651] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-green-700 transition-colors">
          💬 Talk to Advisor
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            Search results for "{query}"
          </h1>
          <p className="text-gray-600">
            Found relevant products, resources, and solutions
          </p>
        </div>

        {/* Answer Card */}
        <AnswerCard query={query} />

        {/* Product Rail */}
        <ProductRail query={query} />

        {/* Resource Rail */}
        <ResourceRail query={query} />
      </div>
    </div>
  );
}