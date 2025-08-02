import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { FileText, Video, Calendar, Download, ExternalLink, Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface ResourcesPageProps {
  onNavigateToPage: (page: string) => void;
  onOpenAdvisor: () => void;
}

export function ResourcesPage({ onNavigateToPage, onOpenAdvisor }: ResourcesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  const handleGlobalSearch = (query: string) => {
    // Navigate to search results with the query
    onNavigateToPage(`search?q=${encodeURIComponent(query)}`);
  };

  const categories = [
    { id: 'all', label: 'All Resources', count: 24 },
    { id: 'reports', label: 'Reports & Research', count: 8 },
    { id: 'webinars', label: 'Webinars', count: 6 },
    { id: 'whitepapers', label: 'White Papers', count: 5 },
    { id: 'case-studies', label: 'Case Studies', count: 3 },
    { id: 'guides', label: 'Implementation Guides', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      title: "2024 Global ESG Trends Report",
      description: "Comprehensive analysis of ESG reporting trends, regulatory changes, and market developments across global markets.",
      type: "Report",
      category: "reports",
      date: "March 2024",
      readTime: "15 min read",
      downloadUrl: "#",
      featured: true,
      tags: ["ESG", "Sustainability", "Reporting", "Compliance"]
    },
    {
      id: 2,
      title: "AI in Market Surveillance: The Future of Compliance",
      description: "Explore how artificial intelligence is revolutionizing market surveillance and compliance monitoring.",
      type: "Webinar",
      category: "webinars",
      date: "February 2024",
      readTime: "45 min",
      downloadUrl: "#",
      featured: true,
      tags: ["AI", "Market Surveillance", "Compliance", "Technology"]
    },
    {
      id: 3,
      title: "Board Governance in the Digital Age",
      description: "Best practices for modern board management, digital transformation, and secure collaboration.",
      type: "White Paper",
      category: "whitepapers",
      date: "January 2024",
      readTime: "20 min read",
      downloadUrl: "#",
      featured: false,
      tags: ["Board Management", "Digital Transformation", "Governance"]
    },
    {
      id: 4,
      title: "Market Data Analytics Implementation Guide",
      description: "Step-by-step guide to implementing advanced market data analytics solutions in your organization.",
      type: "Guide",
      category: "guides",
      date: "December 2023",
      readTime: "30 min read",
      downloadUrl: "#",
      featured: false,
      tags: ["Market Data", "Analytics", "Implementation"]
    },
    {
      id: 5,
      title: "RegTech Success Story: Global Bank Case Study",
      description: "How a leading global bank reduced compliance costs by 40% using Nasdaq's regulatory technology solutions.",
      type: "Case Study",
      category: "case-studies",
      date: "November 2023",
      readTime: "10 min read",
      downloadUrl: "#",
      featured: false,
      tags: ["RegTech", "Case Study", "Banking", "Compliance"]
    },
    {
      id: 6,
      title: "Quarterly Market Surveillance Insights",
      description: "Latest trends in market abuse detection, regulatory updates, and surveillance technology developments.",
      type: "Report",
      category: "reports",
      date: "October 2023",
      readTime: "12 min read",
      downloadUrl: "#",
      featured: false,
      tags: ["Market Surveillance", "Quarterly Report", "Insights"]
    },
    {
      id: 7,
      title: "ESG Data Quality and Standardization",
      description: "Understanding the importance of data quality in ESG reporting and how to achieve standardization.",
      type: "Webinar",
      category: "webinars",
      date: "September 2023",
      readTime: "40 min",
      downloadUrl: "#",
      featured: false,
      tags: ["ESG", "Data Quality", "Standardization"]
    },
    {
      id: 8,
      title: "Cloud-First Trading Infrastructure",
      description: "The benefits and considerations of migrating trading infrastructure to cloud-based solutions.",
      type: "White Paper",
      category: "whitepapers",
      date: "August 2023",
      readTime: "25 min read",
      downloadUrl: "#",
      featured: false,
      tags: ["Cloud", "Trading", "Infrastructure"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'report':
        return FileText;
      case 'webinar':
        return Video;
      case 'white paper':
        return FileText;
      case 'case study':
        return FileText;
      case 'guide':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToPage={onNavigateToPage} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our comprehensive library of reports, research, webinars, and implementation guides 
            to stay ahead of market trends and technology developments.
          </p>
          
          {/* Global Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              onSearch={handleGlobalSearch}
              query={globalSearchQuery}
              setQuery={setGlobalSearchQuery}
              pageContext="default"
              onNavigateToPage={onNavigateToPage}
            />
            
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

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <div 
                  key={resource.id}
                  className="bg-gradient-to-br from-[#0066CC] to-blue-700 rounded-xl p-8 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-blue-200">
                        {resource.date} • {resource.readTime}
                      </div>
                      <button className="bg-white text-[#0066CC] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Filter by:</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Resources
            </h2>
            <span className="text-gray-600">
              {filteredResources.length} resources found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <div 
                  key={resource.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#0066CC] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-[#0066CC] text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      {resource.date} • {resource.readTime}
                    </div>
                    <button className="text-[#0066CC] hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest reports, research, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
            <button className="bg-[#0066CC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}