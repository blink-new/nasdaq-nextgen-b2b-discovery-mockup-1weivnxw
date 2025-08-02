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

  // Group resources by type
  const groupedResources = displayResources.reduce((groups, resource) => {
    const type = resource.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(resource);
    return groups;
  }, {} as Record<string, Resource[]>);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'report':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'webinar':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'guide':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'whitepaper':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'report':
        return '📊';
      case 'webinar':
        return '🎥';
      case 'guide':
        return '📖';
      case 'whitepaper':
        return '📄';
      default:
        return '📋';
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
      
      <div className="space-y-8">
        {Object.entries(groupedResources).map(([type, resources]) => (
          <div key={type} className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Type Header */}
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{getTypeIcon(type)}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{type}s</h3>
                <p className="text-sm text-gray-600">{resources.length} resource{resources.length !== 1 ? 's' : ''} available</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(type)}`}>
                {type}
              </span>
            </div>
            
            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                    {resource.title}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#0066CC] hover:text-blue-700 text-sm font-medium">
                      Download →
                    </button>
                    <span className="text-xs text-gray-500">
                      {type === 'Report' ? 'PDF' : type === 'Webinar' ? 'Video' : 'Document'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button for this type */}
            {resources.length > 2 && (
              <div className="mt-4 text-center">
                <button className="text-[#0066CC] hover:text-blue-700 text-sm font-medium">
                  View all {type}s ({resources.length}) →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}