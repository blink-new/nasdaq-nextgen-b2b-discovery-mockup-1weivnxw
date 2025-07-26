export const mockData = {
  products: [
    {
      id: "boardvantage",
      name: "Nasdaq Boardvantage®",
      thumbnail: "/img/boardvantage.svg",
      benefit: "Streamlined board meeting management",
      cta: "Book demo"
    },
    {
      id: "surveillance",
      name: "Market Surveillance SaaS",
      thumbnail: "/img/surveillance.svg",
      benefit: "Detect market abuse in real time",
      cta: "Request pricing"
    },
    {
      id: "esg-data",
      name: "Nasdaq ESG Data Portal",
      thumbnail: "/img/esg.svg",
      benefit: "Single source for ESG metrics & scores",
      cta: "Download brochure"
    },
    {
      id: "clearing",
      name: "Nasdaq Clearing",
      thumbnail: "/img/clearing.svg",
      benefit: "Risk management and clearing services",
      cta: "Learn more"
    },
    {
      id: "analytics",
      name: "Market Analytics Suite",
      thumbnail: "/img/analytics.svg",
      benefit: "Advanced market intelligence and insights",
      cta: "View demo"
    },
    {
      id: "listing",
      name: "Nasdaq Listing Services",
      thumbnail: "/img/listing.svg",
      benefit: "Global listing and capital markets access",
      cta: "Get started"
    }
  ],
  problems: [
    { id: "p1", text: "Reduce reporting risk" },
    { id: "p2", text: "Streamline ESG disclosures" },
    { id: "p3", text: "Enhance market transparency" },
    { id: "p4", text: "Improve regulatory compliance" },
    { id: "p5", text: "Optimize trading performance" },
    { id: "p6", text: "Manage operational risk" }
  ],
  resources: [
    { id: "r1", title: "Quarterly ESG Trends Report", type: "Report" },
    { id: "r2", title: "Webinar: AI in Surveillance", type: "Webinar" },
    { id: "r3", title: "Market Data Analytics Guide", type: "Guide" },
    { id: "r4", title: "Compliance Best Practices", type: "Whitepaper" },
    { id: "r5", title: "Board Governance Insights", type: "Report" },
    { id: "r6", title: "Risk Management Framework", type: "Guide" }
  ],
  indices: [
    { id: "i1", label: "NDX 12,534.10 ▲ 0.8%" },
    { id: "i2", label: "OMX C25 1,910.22 ▼ 0.3%" },
    { id: "i3", label: "NDAQ 78.45 ▲ 1.2%" }
  ],
  chatReplies: [
    "Hi there! Which Nasdaq solution would you like to explore?",
    "Nasdaq Boardvantage helps directors collaborate securely. Shall I schedule a demo?",
    "Our Market Surveillance SaaS detects insider trading in real time. Want pricing details?",
    "The ESG Data Portal provides comprehensive sustainability metrics. Would you like to see a demo?",
    "I can help you find the right solution for your needs. What's your main challenge?",
    "Let me connect you with a specialist who can provide detailed information."
  ],
  answerCards: {
    esg: {
      title: "ESG Solutions",
      content: "Nasdaq's comprehensive ESG solutions help organizations measure, report, and improve their environmental, social, and governance performance with industry-leading data and analytics."
    },
    surveillance: {
      title: "Market Surveillance",
      content: "Advanced AI-powered surveillance technology that monitors trading patterns in real-time to detect potential market abuse, ensuring regulatory compliance and market integrity."
    },
    boardvantage: {
      title: "Board Management",
      content: "Secure, cloud-based platform that streamlines board meeting preparation, collaboration, and governance processes for directors and executives worldwide."
    },
    default: {
      title: "Nasdaq Solutions",
      content: "Discover Nasdaq's comprehensive suite of technology solutions designed to power the world's financial markets and help organizations achieve their business objectives."
    }
  },
  facetChips: [
    { keyword: "esg", label: "ESG", color: "bg-green-100 text-green-800" },
    { keyword: "surveillance", label: "Surveillance", color: "bg-blue-100 text-blue-800" },
    { keyword: "board", label: "Board Management", color: "bg-purple-100 text-purple-800" },
    { keyword: "data", label: "Data Solutions", color: "bg-orange-100 text-orange-800" },
    { keyword: "compliance", label: "Compliance", color: "bg-red-100 text-red-800" }
  ],
  productCategories: [
    {
      id: "governance",
      name: "Corporate Governance",
      description: "Board management and governance solutions",
      products: ["Nasdaq Boardvantage®", "Director Intelligence"],
      icon: "🏛️",
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "surveillance",
      name: "Market Surveillance",
      description: "Real-time monitoring and compliance tools",
      products: ["Market Surveillance SaaS", "Trade Surveillance"],
      icon: "🔍",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "esg",
      name: "ESG & Sustainability",
      description: "Environmental, social, and governance data",
      products: ["ESG Data Portal", "Sustainability Reporting"],
      icon: "🌱",
      color: "bg-green-50 border-green-200"
    },
    {
      id: "analytics",
      name: "Market Analytics",
      description: "Advanced market intelligence and insights",
      products: ["Market Analytics Suite", "Risk Analytics"],
      icon: "📊",
      color: "bg-orange-50 border-orange-200"
    },
    {
      id: "clearing",
      name: "Clearing & Settlement",
      description: "Risk management and clearing services",
      products: ["Nasdaq Clearing", "Settlement Services"],
      icon: "⚖️",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      id: "listing",
      name: "Capital Markets",
      description: "Listing services and market access",
      products: ["Listing Services", "Market Making"],
      icon: "💼",
      color: "bg-gray-50 border-gray-200"
    }
  ],
  topProblems: [
    {
      id: "compliance",
      title: "Regulatory Compliance",
      description: "Navigate complex regulatory requirements efficiently",
      solutions: ["Market Surveillance", "ESG Reporting", "Board Management"],
      urgency: "high",
      icon: "⚠️"
    },
    {
      id: "risk",
      title: "Risk Management",
      description: "Identify and mitigate operational and market risks",
      solutions: ["Risk Analytics", "Clearing Services", "Surveillance"],
      urgency: "high",
      icon: "🛡️"
    },
    {
      id: "transparency",
      title: "Market Transparency",
      description: "Enhance visibility into market operations and performance",
      solutions: ["Market Analytics", "ESG Data", "Surveillance"],
      urgency: "medium",
      icon: "👁️"
    },
    {
      id: "efficiency",
      title: "Operational Efficiency",
      description: "Streamline processes and reduce manual overhead",
      solutions: ["Boardvantage", "Clearing Services", "Analytics"],
      urgency: "medium",
      icon: "⚡"
    }
  ],
  popularSearches: [
    "ESG reporting requirements",
    "Market surveillance best practices",
    "Board meeting management",
    "Regulatory compliance automation",
    "Risk analytics dashboard",
    "Clearing and settlement services",
    "Market transparency tools",
    "Corporate governance solutions",
    "Trade surveillance technology",
    "Sustainability data portal"
  ],
  personalizationData: {
    recentSearches: ["ESG data", "board management", "surveillance"],
    recommendedProducts: ["Nasdaq Boardvantage®", "ESG Data Portal"],
    industryFocus: "Financial Services",
    companySize: "Enterprise",
    userRole: "Compliance Officer",
    visitCount: 3,
    lastVisit: "2 days ago",
    preferredTopics: ["ESG", "Compliance", "Risk Management"]
  },
  marketActivity: {
    recentNews: [
      {
        id: "n1",
        title: "Tech Stocks Rally as AI Sector Shows Strong Growth",
        summary: "Major technology companies see significant gains following positive earnings reports",
        timestamp: "2 hours ago",
        category: "Technology"
      },
      {
        id: "n2",
        title: "Federal Reserve Signals Potential Rate Changes",
        summary: "Market analysts anticipate policy shifts following latest economic indicators",
        timestamp: "4 hours ago",
        category: "Economic Policy"
      },
      {
        id: "n3",
        title: "ESG Investment Trends Continue to Shape Market",
        summary: "Sustainable investing reaches new milestones as institutional adoption grows",
        timestamp: "6 hours ago",
        category: "ESG"
      },
      {
        id: "n4",
        title: "Cryptocurrency Market Shows Volatility",
        summary: "Digital assets experience mixed performance amid regulatory developments",
        timestamp: "8 hours ago",
        category: "Crypto"
      }
    ],
    trendingTickers: [
      { symbol: "AAPL", name: "Apple Inc.", price: "189.25", change: "+2.45", changePercent: "+1.31%" },
      { symbol: "MSFT", name: "Microsoft Corp.", price: "378.90", change: "+5.67", changePercent: "+1.52%" },
      { symbol: "GOOGL", name: "Alphabet Inc.", price: "142.18", change: "-1.23", changePercent: "-0.86%" },
      { symbol: "TSLA", name: "Tesla Inc.", price: "248.50", change: "+12.30", changePercent: "+5.20%" },
      { symbol: "NVDA", name: "NVIDIA Corp.", price: "875.40", change: "+18.75", changePercent: "+2.19%" },
      { symbol: "META", name: "Meta Platforms", price: "485.20", change: "+7.85", changePercent: "+1.64%" }
    ],
    marketIndices: [
      { name: "NASDAQ Composite", symbol: "IXIC", value: "15,847.25", change: "+125.30", changePercent: "+0.80%" },
      { name: "S&P 500", symbol: "SPX", value: "4,967.23", change: "+28.45", changePercent: "+0.58%" },
      { name: "Dow Jones", symbol: "DJI", value: "38,654.10", change: "+156.89", changePercent: "+0.41%" }
    ],
    popularSearches: [
      "AAPL earnings report",
      "Tech sector analysis",
      "Market volatility trends",
      "ESG investment opportunities",
      "Cryptocurrency regulations",
      "Interest rate impact",
      "AI stock performance",
      "Market outlook 2024"
    ]
  }
};

export type Product = typeof mockData.products[0];
export type Problem = typeof mockData.problems[0];
export type Resource = typeof mockData.resources[0];
export type Index = typeof mockData.indices[0];
export type AnswerCard = typeof mockData.answerCards.default;
export type FacetChip = typeof mockData.facetChips[0];
export type ProductCategory = typeof mockData.productCategories[0];
export type TopProblem = typeof mockData.topProblems[0];