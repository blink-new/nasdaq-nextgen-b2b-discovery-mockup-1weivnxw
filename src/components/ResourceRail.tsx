import { mockData, Resource } from '../data/mockData';

interface ResourceRailProps {
  query: string;
}

export function ResourceRail({ query }: ResourceRailProps) {
  const filterResources = (resources: Resource[], query: string): Resource[] => {
    if (!query) return resources;
    const lowerQuery = query.toLowerCase();
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.type.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredResources = filterResources(mockData.resources, query);
  const displayResources = filteredResources.length > 0 ? filteredResources : mockData.resources;

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'report':
        return 'bg-blue-100 text-blue-800';
      case 'webinar':
        return 'bg-green-100 text-green-800';
      case 'guide':
        return 'bg-purple-100 text-purple-800';
      case 'whitepaper':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Resources & Insights</h2>
        <button className="text-[#0066CC] hover:text-blue-700 font-medium text-sm">
          Browse all resources →
        </button>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {displayResources.map((resource) => (
          <div 
            key={resource.id} 
            className="flex-shrink-0 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer min-w-[280px]"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                {resource.type}
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
              {resource.title}
            </h3>
            
            <button className="text-[#0066CC] hover:text-blue-700 text-sm font-medium">
              Download →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}