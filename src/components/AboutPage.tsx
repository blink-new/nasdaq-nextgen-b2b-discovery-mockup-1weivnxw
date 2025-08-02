import { Header } from './Header';
import { Users, Globe, TrendingUp, Award, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onNavigateToPage: (page: string) => void;
  onOpenAdvisor: () => void;
}

export function AboutPage({ onNavigateToPage, onOpenAdvisor }: AboutPageProps) {
  const stats = [
    { label: "Countries Served", value: "130+", icon: Globe },
    { label: "Listed Companies", value: "4,000+", icon: TrendingUp },
    { label: "Employees Worldwide", value: "5,800+", icon: Users },
    { label: "Years of Innovation", value: "50+", icon: Award }
  ];

  const timeline = [
    {
      year: "1971",
      title: "NASDAQ Founded",
      description: "The world's first electronic stock market begins operations, revolutionizing how securities are traded."
    },
    {
      year: "1985",
      title: "Market Technology Launch",
      description: "Nasdaq begins licensing its market technology to other exchanges worldwide."
    },
    {
      year: "2000",
      title: "Global Expansion",
      description: "Nasdaq becomes a publicly traded company and expands its technology solutions globally."
    },
    {
      year: "2010",
      title: "Acquisition Strategy",
      description: "Strategic acquisitions in market surveillance, corporate governance, and data analytics."
    },
    {
      year: "2020",
      title: "Cloud-First Innovation",
      description: "Launch of cloud-native solutions and AI-powered market surveillance technology."
    },
    {
      year: "2024",
      title: "Next-Gen Solutions",
      description: "Continued innovation in ESG, RegTech, and intelligent market infrastructure."
    }
  ];

  const leadership = [
    {
      name: "Adena Friedman",
      title: "President & CEO",
      bio: "Leading Nasdaq's transformation into a technology company that powers the global economy.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ann Dennison",
      title: "Executive Vice President & CFO",
      bio: "Overseeing financial strategy and operations across Nasdaq's global business segments.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Brad Peterson",
      title: "Chief Technology Officer",
      bio: "Driving technology innovation and digital transformation initiatives across the organization.",
      image: "/api/placeholder/150/150"
    }
  ];

  const offices = [
    { city: "New York", country: "United States", type: "Global Headquarters" },
    { city: "Stockholm", country: "Sweden", type: "European Headquarters" },
    { city: "London", country: "United Kingdom", type: "Regional Office" },
    { city: "Tokyo", country: "Japan", type: "Asia Pacific Office" },
    { city: "Toronto", country: "Canada", type: "Regional Office" },
    { city: "Reykjavik", country: "Iceland", type: "Nordic Office" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToPage={onNavigateToPage} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Nasdaq
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over 50 years, Nasdaq has been at the forefront of financial innovation, 
            powering stronger economies and creating opportunities for investors and companies worldwide. 
            Today, we're a leading technology company serving the capital markets and beyond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0066CC] to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To harness the power of technology to promote fairness, transparency, and growth 
                in the global economy, enabling companies to access capital and investors to 
                build wealth through innovative market solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00A651] to-green-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To be the trusted technology partner that powers inclusive and sustainable 
                economic growth, connecting markets, companies, and communities through 
                cutting-edge financial technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="text-[#0066CC] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#0066CC] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-[#0066CC] font-medium mb-3">{leader.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Global Presence</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{office.city}</div>
                    <div className="text-sm text-gray-600">{office.country}</div>
                    <div className="text-xs text-[#0066CC] font-medium">{office.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We operate with the highest ethical standards and transparency in everything we do.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously push boundaries to create cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm">
                We build lasting relationships based on trust, collaboration, and mutual success.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600 text-sm">
                We strive to create positive change that benefits markets, communities, and society.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner with Nasdaq?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our technology solutions can transform your business and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenAdvisor}
              className="bg-white text-[#0066CC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={() => onNavigateToPage('home')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0066CC] transition-colors"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}