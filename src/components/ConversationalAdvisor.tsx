import React, { useState } from 'react'
import { MessageCircle, X, User, Building, Target, ArrowRight, Calendar, Phone, Mail, CheckCircle } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

interface UserProfile {
  role: string
  problems: string[]
}

interface ConversationalAdvisorProps {
  isOpen: boolean
  onClose: () => void
}

const ROLES = [
  { id: 'compliance', name: 'Compliance Officer', icon: '⚖️', problems: ['Regulatory Compliance', 'Risk Management', 'Market Surveillance'] },
  { id: 'cfo', name: 'CFO/Finance Executive', icon: '💰', problems: ['ESG Reporting', 'Financial Compliance', 'Board Governance'] },
  { id: 'board', name: 'Board Director', icon: '🏛️', problems: ['Board Meeting Management', 'Corporate Governance', 'Director Collaboration'] },
  { id: 'risk', name: 'Risk Manager', icon: '🛡️', problems: ['Risk Assessment', 'Market Surveillance', 'Compliance Monitoring'] },
  { id: 'esg', name: 'ESG Manager', icon: '🌱', problems: ['ESG Reporting', 'Sustainability Metrics', 'Regulatory Disclosures'] },
  { id: 'operations', name: 'Market Operations', icon: '📊', problems: ['Market Analytics', 'Trading Operations', 'Settlement Processes'] },
  { id: 'legal', name: 'Legal Counsel', icon: '⚖️', problems: ['Regulatory Compliance', 'Legal Risk', 'Corporate Governance'] },
  { id: 'ceo', name: 'CEO/Executive', icon: '👔', problems: ['Strategic Planning', 'Board Relations', 'Regulatory Oversight'] }
]

export default function ConversationalAdvisor({ isOpen, onClose }: ConversationalAdvisorProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'demo-form' | 'contact-form'>('welcome')
  const [inputValue, setInputValue] = useState('')

  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    timeframe: '',
    requirements: ''
  })

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRoleSelect = (role: typeof ROLES[0]) => {
    const profile: UserProfile = {
      role: role.name,
      problems: role.problems
    }
    setUserProfile(profile)
    
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: `Welcome! As a ${role.name}, I understand you're dealing with challenges around ${role.problems.join(', ')}. I'm here to help you find the right Nasdaq solutions.`,
      timestamp: new Date()
    }
    
    setMessages([welcomeMessage])
    setCurrentView('chat')
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Generate bot response based on input
    setTimeout(() => {
      let botResponse = ''
      const input = inputValue.toLowerCase()

      if (input.includes('demo') || input.includes('demonstration')) {
        botResponse = "I'd be happy to arrange a demo for you! Let me collect some details to ensure we show you the most relevant features."
        setCurrentView('demo-form')
      } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
        botResponse = "I'll connect you with our sales team for detailed pricing information. Let me get your contact details."
        setCurrentView('contact-form')
      } else if (input.includes('esg')) {
        botResponse = "Our Nasdaq ESG Data Portal provides comprehensive ESG metrics and reporting capabilities. It's a single source for all your sustainability data needs. Would you like to see a demo?"
      } else if (input.includes('surveillance')) {
        botResponse = "Our Market Surveillance SaaS solution detects market abuse in real-time using advanced AI algorithms. It helps ensure regulatory compliance and market integrity. Interested in learning more?"
      } else if (input.includes('boardvantage') || input.includes('board')) {
        botResponse = "Nasdaq Boardvantage® streamlines board meeting management with secure collaboration tools for directors. It's trusted by thousands of boards worldwide. Would you like to schedule a demo?"
      } else {
        botResponse = "Thanks for your question! Based on your role and interests, I'd recommend exploring our solutions for your specific challenges. Would you like to book a demo or speak with our sales team?"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputValue('')
  }

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    const confirmationMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: `Perfect! I've scheduled your demo for ${demoForm.product}. Reference ID: DEMO-${Date.now().toString().slice(-6)}. Our team will contact you within 24 hours at ${demoForm.email} to confirm the details.`,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, confirmationMessage])
    setCurrentView('chat')
    
    // Reset form
    setDemoForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      timeframe: '',
      requirements: ''
    })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    const confirmationMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: `Thank you! I've created ticket #${Date.now().toString().slice(-6)} for your inquiry. Our sales team will respond within 4 business hours at ${contactForm.email}.`,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, confirmationMessage])
    setCurrentView('chat')
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleQuickAction = (action: string) => {
    if (action === 'demo') {
      setCurrentView('demo-form')
    } else if (action === 'pricing') {
      setCurrentView('contact-form')
    } else {
      const message: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: action,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, message])
      setInputValue(action)
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
      <div 
        className="bg-white w-96 h-full shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Nasdaq AI Assistant</h3>
              <div className="flex items-center space-x-1 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {currentView === 'welcome' && !userProfile && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Welcome to Nasdaq!</h4>
                <p className="text-gray-600 text-sm">Let's personalize your experience. What's your role?</p>
              </div>

              <div className="space-y-3">
                {ROLES.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role)}
                    className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{role.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 group-hover:text-blue-600">
                          {role.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {role.problems.slice(0, 2).join(', ')}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentView === 'chat' && (
            <div className="flex flex-col h-full">
              {/* User Profile Bar */}
              {userProfile && (
                <div className="bg-gray-50 p-3 border-b">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">{userProfile.role}</span>
                    <span className="text-gray-500">•</span>
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Focus: {userProfile.problems[0]}</span>
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Quick Actions */}
                {messages.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button
                      onClick={() => handleQuickAction('demo')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
                    >
                      📅 Book Demo
                    </button>
                    <button
                      onClick={() => handleQuickAction('pricing')}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors"
                    >
                      💰 Get Pricing
                    </button>
                    <button
                      onClick={() => handleQuickAction('How to list on Nasdaq?')}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition-colors"
                    >
                      📋 Listing Process
                    </button>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentView === 'demo-form' && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Demo
                </h4>
                <p className="text-sm opacity-90 mt-1">Let's set up a personalized demonstration</p>
              </div>

              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={demoForm.name}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={demoForm.email}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    value={demoForm.company}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                  <select
                    value={demoForm.product}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, product: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a product</option>
                    <option value="Nasdaq Boardvantage®">Nasdaq Boardvantage®</option>
                    <option value="Market Surveillance SaaS">Market Surveillance SaaS</option>
                    <option value="Nasdaq ESG Data Portal">Nasdaq ESG Data Portal</option>
                    <option value="Multiple Products">Multiple Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Implementation Timeframe</label>
                  <select
                    value={demoForm.timeframe}
                    onChange={(e) => setDemoForm(prev => ({ ...prev, timeframe: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeframe</option>
                    <option value="Immediate (0-3 months)">Immediate (0-3 months)</option>
                    <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                    <option value="Medium-term (6-12 months)">Medium-term (6-12 months)</option>
                    <option value="Research phase">Research phase</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentView('chat')}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back to Chat
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule Demo
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentView === 'contact-form' && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </h4>
                <p className="text-sm opacity-90 mt-1">Get pricing and detailed information</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.company}
                    onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Pricing inquiry, product questions, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentView('chat')}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back to Chat
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Success!</h4>
              <p className="text-gray-600">Your request has been submitted.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}