import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Sparkles, User, Bot, Calendar, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react'
import EmbeddedDemoForm, { DemoFormData } from './EmbeddedDemoForm'
import ProductCard from './ProductCard'
import ProductDetailsModal from './ProductDetailsModal'
import { mockData, Product } from '../data/mockData'

interface Message {
  id: string
  type: 'user' | 'bot' | 'form' | 'confirmation' | 'role-prompt' | 'problem-prompt' | 'product-recommendations'
  content: string
  timestamp: Date
  isTyping?: boolean
  quickReplies?: string[]
  multipleChoice?: {
    options: string[]
    showMore?: boolean
    allOptions?: string[]
  }
  actions?: Array<{
    label: string
    type: 'demo' | 'contact' | 'explore'
    data?: any
  }>
  formData?: {
    productName?: string
    showForm?: boolean
  }
  confirmationData?: {
    formData: DemoFormData
    productName?: string
  }
  productRecommendations?: Product[]
}

interface ConversationalAdvisorProps {
  isOpen: boolean
  onClose: () => void
}

const ROLE_OPTIONS = [
  "Chief Compliance Officer",
  "Board Director",
  "ESG Manager",
  "Risk Manager",
  "Chief Financial Officer",
  "Chief Technology Officer",
  "Investment Manager",
  "Regulatory Affairs Manager",
  "Operations Manager",
  "Data Analyst",
  "Legal Counsel",
  "Audit Manager"
]

const PROBLEM_OPTIONS = [
  "Regulatory compliance challenges",
  "ESG reporting requirements",
  "Board governance inefficiencies",
  "Market surveillance needs",
  "Risk management gaps",
  "Data analytics limitations",
  "Operational inefficiencies",
  "Transparency requirements",
  "Technology modernization",
  "Cost reduction initiatives",
  "Audit preparation",
  "Stakeholder communication"
]

const CONVERSATION_STARTERS = [
  "What Nasdaq solutions are available?",
  "I need help with ESG reporting",
  "Show me compliance tools",
  "How can I improve board governance?",
  "Tell me about market surveillance"
]

const QUICK_REPLIES = [
  "Tell me more",
  "Show me a demo",
  "Get pricing",
  "Compare solutions",
  "How does this work?"
]

export default function ConversationalAdvisor({ isOpen, onClose }: ConversationalAdvisorProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationStarted, setConversationStarted] = useState(false)
  const [userRole, setUserRole] = useState<string>('')
  const [userProblem, setUserProblem] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<'role' | 'problem' | 'conversation'>('role')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Initialize conversation with role prompt
  useEffect(() => {
    if (isOpen && !conversationStarted) {
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'role-prompt',
        content: "Hi there! 👋 I'm your Nasdaq AI Assistant. To help you discover the most relevant solutions, let me start by understanding your role. What best describes your position?",
        timestamp: new Date(),
        multipleChoice: {
          options: ROLE_OPTIONS.slice(0, 6),
          showMore: false,
          allOptions: ROLE_OPTIONS
        }
      }
      setMessages([welcomeMessage])
      setConversationStarted(true)
    }
  }, [isOpen, conversationStarted])

  const simulateTyping = (duration: number = 1500) => {
    setIsTyping(true)
    return new Promise(resolve => {
      setTimeout(() => {
        setIsTyping(false)
        resolve(true)
      }, duration)
    })
  }

  const generatePersonalizedResponse = (role: string, problem: string): Message => {
    const content = `Perfect! As a ${role} dealing with ${problem.toLowerCase()}, I've identified the most relevant Nasdaq solutions for your needs. Here are my top recommendations:`
    let quickReplies: string[] = []
    let actions: Message['actions'] = []
    let recommendedProducts: Product[] = []

    // Personalized recommendations based on role and problem
    if (problem.includes('compliance') || problem.includes('regulatory')) {
      recommendedProducts = [
        mockData.products.find(p => p.id === 'surveillance')!,
        mockData.products.find(p => p.id === 'esg-data')!,
        mockData.products.find(p => p.id === 'boardvantage')!
      ].filter(Boolean)
      quickReplies = ["Tell me about surveillance", "Show ESG features", "Board compliance tools"]
      actions = [
        { label: "📊 Compare All Solutions", type: 'explore' },
        { label: "📅 Schedule Demo", type: 'demo' }
      ]
    } else if (problem.includes('ESG') || problem.includes('reporting')) {
      recommendedProducts = [
        mockData.products.find(p => p.id === 'esg-data')!,
        mockData.products.find(p => p.id === 'analytics')!,
        mockData.products.find(p => p.id === 'boardvantage')!
      ].filter(Boolean)
      quickReplies = ["ESG Portal features", "Analytics capabilities", "Governance tools"]
      actions = [
        { label: "🌱 Explore ESG Solutions", type: 'explore' },
        { label: "📅 Book ESG Demo", type: 'demo', data: { product: 'Nasdaq ESG Data Portal' } }
      ]
    } else if (problem.includes('governance') || problem.includes('board')) {
      recommendedProducts = [
        mockData.products.find(p => p.id === 'boardvantage')!,
        mockData.products.find(p => p.id === 'esg-data')!,
        mockData.products.find(p => p.id === 'analytics')!
      ].filter(Boolean)
      quickReplies = ["Boardvantage features", "Governance reporting", "Board analytics"]
      actions = [
        { label: "🏛️ Explore Boardvantage", type: 'explore' },
        { label: "📅 Schedule Demo", type: 'demo', data: { product: 'Nasdaq Boardvantage®' } }
      ]
    } else if (problem.includes('risk') || problem.includes('management')) {
      recommendedProducts = [
        mockData.products.find(p => p.id === 'surveillance')!,
        mockData.products.find(p => p.id === 'clearing')!,
        mockData.products.find(p => p.id === 'analytics')!
      ].filter(Boolean)
      quickReplies = ["Risk monitoring", "Clearing services", "Analytics tools"]
      actions = [
        { label: "🛡️ Risk Solutions", type: 'explore' },
        { label: "💰 Get Pricing", type: 'contact' }
      ]
    } else {
      recommendedProducts = [
        mockData.products.find(p => p.id === 'analytics')!,
        mockData.products.find(p => p.id === 'esg-data')!,
        mockData.products.find(p => p.id === 'boardvantage')!
      ].filter(Boolean)
      quickReplies = ["Show all solutions", "Compare options", "What's most popular?"]
      actions = [
        { label: "🎯 Find My Solution", type: 'explore' },
        { label: "📅 Schedule Consultation", type: 'demo' }
      ]
    }

    // Create the product recommendations message
    const productMessage: Message = {
      id: (Date.now() + 2).toString(),
      type: 'product-recommendations',
      content,
      timestamp: new Date(),
      quickReplies,
      actions,
      productRecommendations: recommendedProducts
    }

    return productMessage
  }

  const showDemoForm = (productName?: string) => {
    const formMessage: Message = {
      id: Date.now().toString(),
      type: 'form',
      content: 'Demo Scheduling Form',
      timestamp: new Date(),
      formData: {
        productName,
        showForm: true
      }
    }
    setMessages(prev => [...prev, formMessage])
  }

  const handleFormSubmit = async (formData: DemoFormData) => {
    // Remove the form message
    setMessages(prev => prev.filter(msg => msg.type !== 'form'))
    
    // Add confirmation message
    const confirmationMessage: Message = {
      id: Date.now().toString(),
      type: 'confirmation',
      content: 'Demo Scheduled Successfully!',
      timestamp: new Date(),
      confirmationData: {
        formData,
        productName: formData.interests
      }
    }
    
    setMessages(prev => [...prev, confirmationMessage])
    
    // Add follow-up bot message
    setTimeout(async () => {
      await simulateTyping(1000)
      const followUpMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Perfect! I've scheduled your demo for **${new Date(formData.preferredDate).toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric' 
        })} at ${formData.preferredTime} ${formData.timezone}**.\n\nYou'll receive a calendar invitation at ${formData.email} shortly. Our specialist will be prepared to show you exactly how ${formData.interests || 'our solutions'} can address your specific needs.\n\nIs there anything else you'd like to know before the demo?`,
        timestamp: new Date(),
        quickReplies: ['What should I prepare?', 'Can I reschedule?', 'Tell me about other solutions'],
        actions: [
          { label: '📧 Add to Calendar', type: 'contact', data: { action: 'calendar' } },
          { label: '🔄 Schedule Another Demo', type: 'demo' }
        ]
      }
      setMessages(prev => [...prev, followUpMessage])
    }, 500)
  }

  const handleFormCancel = () => {
    // Remove the form message and add a cancellation message
    setMessages(prev => prev.filter(msg => msg.type !== 'form'))
    
    const cancelMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: "No problem! Feel free to schedule a demo anytime. I'm here to help you explore our solutions whenever you're ready.",
      timestamp: new Date(),
      quickReplies: ['Tell me more about solutions', 'Show me pricing', 'What\'s most popular?'],
      actions: [
        { label: '📅 Schedule Later', type: 'demo' },
        { label: '💰 Get Pricing', type: 'contact' }
      ]
    }
    
    setMessages(prev => [...prev, cancelMessage])
  }

  const generateBotResponse = async (userInput: string): Promise<Message> => {
    await simulateTyping()
    
    const input = userInput.toLowerCase()
    let content = ''
    let quickReplies: string[] = []
    let actions: Message['actions'] = []

    // Context-aware responses
    if (input.includes('esg') || input.includes('sustainability') || input.includes('environmental')) {
      content = "Great! ESG reporting is crucial for modern businesses. Our **Nasdaq ESG Data Portal** provides comprehensive ESG metrics and scores from a single source. It helps streamline sustainability disclosures and meet regulatory requirements."
      quickReplies = ["Show me ESG features", "Book ESG demo", "ESG pricing info"]
      actions = [
        { label: "📊 Explore ESG Portal", type: 'explore', data: { product: 'ESG Data Portal' } },
        { label: "📅 Schedule Demo", type: 'demo', data: { product: 'Nasdaq ESG Data Portal' } }
      ]
    } else if (input.includes('compliance') || input.includes('surveillance') || input.includes('monitoring')) {
      content = "Compliance is key! Our **Market Surveillance SaaS** detects market abuse in real-time and helps you stay ahead of regulatory requirements. It's designed to identify suspicious trading patterns and ensure market integrity."
      quickReplies = ["How does surveillance work?", "Compliance features", "Implementation timeline"]
      actions = [
        { label: "🛡️ Learn About Surveillance", type: 'explore', data: { product: 'Market Surveillance' } },
        { label: "💰 Get Pricing", type: 'contact', data: { product: 'Market Surveillance SaaS' } }
      ]
    } else if (input.includes('board') || input.includes('governance') || input.includes('meeting')) {
      content = "Board governance made simple! **Nasdaq Boardvantage®** streamlines board meeting management and enhances director collaboration. It's a secure platform that transforms how boards operate."
      quickReplies = ["Board features", "Security details", "Integration options"]
      actions = [
        { label: "🏛️ Explore Boardvantage", type: 'explore', data: { product: 'Boardvantage' } },
        { label: "📅 Book Demo", type: 'demo', data: { product: 'Nasdaq Boardvantage®' } }
      ]
    } else if (input.includes('demo') || input.includes('demonstration') || input.includes('show me')) {
      content = "I'd love to arrange a personalized demo for you! Our demos are tailored to your specific needs and show real-world scenarios. Which solution interests you most?"
      quickReplies = ["ESG Data Portal", "Market Surveillance", "Boardvantage®"]
      actions = [
        { label: "📅 Schedule Demo", type: 'demo' }
      ]
    } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      content = "I'll connect you with our sales team for detailed pricing information. Our solutions are priced based on your specific needs and scale. Let me get your details to provide accurate pricing."
      actions = [
        { label: "💰 Get Pricing Info", type: 'contact' }
      ]
    } else if (input.includes('compare') || input.includes('difference') || input.includes('vs')) {
      content = "Great question! Each of our solutions serves different needs:\n\n• **ESG Data Portal** - For sustainability reporting\n• **Market Surveillance** - For compliance monitoring\n• **Boardvantage®** - For board governance\n\nWhich area is most relevant to your role?"
      quickReplies = ["ESG reporting", "Compliance needs", "Board governance"]
    } else {
      // Default intelligent response
      content = "I understand you're looking for solutions that can help your business. Based on what you've mentioned, I'd recommend exploring our comprehensive suite of products. Each is designed to address specific business challenges with cutting-edge technology."
      quickReplies = ["Show all solutions", "Tell me more", "What's most popular?"]
      actions = [
        { label: "🎯 Find My Solution", type: 'explore' }
      ]
    }

    return {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      quickReplies,
      actions
    }
  }

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim()
    if (!text) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Generate and add bot response
    const botResponse = await generateBotResponse(text)
    setMessages(prev => [...prev, botResponse])
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleRoleSelection = async (role: string) => {
    setUserRole(role)
    setCurrentStep('problem')
    
    // Add user's role selection message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: role,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    
    // Add problem prompt after typing delay
    await simulateTyping(1000)
    const problemMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'problem-prompt',
      content: `Great! As a ${role}, what's the main challenge you're looking to address? This will help me recommend the most suitable Nasdaq solutions for your needs.`,
      timestamp: new Date(),
      multipleChoice: {
        options: PROBLEM_OPTIONS.slice(0, 6),
        showMore: false,
        allOptions: PROBLEM_OPTIONS
      }
    }
    setMessages(prev => [...prev, problemMessage])
  }

  const handleProblemSelection = async (problem: string) => {
    setUserProblem(problem)
    setCurrentStep('conversation')
    
    // Add user's problem selection message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: problem,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    
    // Generate personalized response based on role and problem
    await simulateTyping(1500)
    const personalizedResponse = generatePersonalizedResponse(userRole, problem)
    setMessages(prev => [...prev, personalizedResponse])
  }

  const handleShowMoreOptions = (messageId: string, allOptions: string[]) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId && msg.multipleChoice
        ? {
            ...msg,
            multipleChoice: {
              ...msg.multipleChoice,
              options: allOptions,
              showMore: true
            }
          }
        : msg
    ))
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
  }

  const handleScheduleDemoFromModal = (productName: string) => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
    showDemoForm(productName)
  }

  const handleAction = (action: Message['actions'][0]) => {
    if (action.type === 'demo') {
      // Show embedded form instead of just sending a message
      showDemoForm(action.data?.product)
    } else if (action.type === 'contact') {
      handleSendMessage(`I need pricing information for ${action.data?.product || 'your solutions'}`)
    } else if (action.type === 'explore') {
      handleSendMessage(`Tell me more about ${action.data?.product || 'your solutions'}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nasdaq AI Assistant</h3>
                <div className="flex items-center space-x-2 text-sm opacity-90">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online • Ready to help</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id}>
              {/* Form Message */}
              {message.type === 'form' && message.formData?.showForm && (
                <div className="flex justify-center mb-4">
                  <EmbeddedDemoForm
                    productName={message.formData.productName}
                    onSubmit={handleFormSubmit}
                    onCancel={handleFormCancel}
                  />
                </div>
              )}

              {/* Confirmation Message */}
              {message.type === 'confirmation' && message.confirmationData && (
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg max-w-2xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Demo Scheduled Successfully!</h3>
                        <p className="text-sm text-gray-600">We'll be in touch soon</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-green-200 space-y-2">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">
                          {message.confirmationData.formData.firstName} {message.confirmationData.formData.lastName}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">
                          {new Date(message.confirmationData.formData.preferredDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at {message.confirmationData.formData.preferredTime}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{message.confirmationData.formData.email}</span>
                      </div>
                      
                      {message.confirmationData.formData.interests && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-sm text-gray-600">
                            <strong>Focus:</strong> {message.confirmationData.formData.interests}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Product Recommendations */}
              {message.type === 'product-recommendations' && (
                <div className="mb-4">
                  {/* Bot Message */}
                  <div className="flex justify-start mb-4">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 px-4 py-3">
                        <div className="text-sm leading-relaxed whitespace-pre-line">
                          {message.content}
                        </div>
                        <div className="text-xs mt-2 text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Cards */}
                  {message.productRecommendations && message.productRecommendations.length > 0 && (
                    <div className="ml-10 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {message.productRecommendations.map((product, index) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onSelect={handleProductSelect}
                            className="transform hover:scale-105 transition-transform duration-200"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Regular Message Bubble */}
              {(message.type === 'user' || message.type === 'bot' || message.type === 'role-prompt' || message.type === 'problem-prompt') && (
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border-2 border-blue-200 text-blue-600'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    {/* Message Content */}
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                    }`}>
                      <div className="text-sm leading-relaxed whitespace-pre-line">
                        {message.content}
                      </div>
                      <div className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Multiple Choice Options */}
              {(message.type === 'role-prompt' || message.type === 'problem-prompt') && message.multipleChoice && (
                <div className="ml-10 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {message.multipleChoice.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (message.type === 'role-prompt') {
                            handleRoleSelection(option)
                          } else if (message.type === 'problem-prompt') {
                            handleProblemSelection(option)
                          }
                        }}
                        className="px-4 py-3 text-sm bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-200 hover:border-blue-300 text-left shadow-sm hover:shadow-md"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {/* Show More Button */}
                  {!message.multipleChoice.showMore && message.multipleChoice.allOptions && message.multipleChoice.allOptions.length > message.multipleChoice.options.length && (
                    <button
                      onClick={() => handleShowMoreOptions(message.id, message.multipleChoice!.allOptions!)}
                      className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Show {message.multipleChoice.allOptions.length - message.multipleChoice.options.length} more options
                    </button>
                  )}
                </div>
              )}

              {/* Quick Replies - Only for bot and product-recommendations messages */}
              {(message.type === 'bot' || message.type === 'product-recommendations') && message.quickReplies && message.quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2 ml-10 mb-2">
                  {message.quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Action Buttons - Only for bot and product-recommendations messages */}
              {(message.type === 'bot' || message.type === 'product-recommendations') && message.actions && message.actions.length > 0 && (
                <div className="flex flex-wrap gap-2 ml-10">
                  {message.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleAction(action)}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm flex items-center space-x-1"
                    >
                      <span>{action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t bg-white p-4">
          {/* Conversation Starters (only show when no messages) */}
          {messages.length <= 1 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">💡 Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {CONVERSATION_STARTERS.slice(0, 3).map((starter, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(starter)}
                    className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Nasdaq solutions..."
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm bg-white shadow-sm transition-all duration-200 hover:border-gray-400"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                Press Enter to send
              </div>
            </div>
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center mt-3 space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <ThumbsUp className="w-3 h-3" />
              <span>Helpful responses</span>
            </span>
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>AI-powered insights</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3" />
              <span>Instant support</span>
            </span>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
        onScheduleDemo={handleScheduleDemoFromModal}
      />
    </div>
  )
}